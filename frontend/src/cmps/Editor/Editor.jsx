import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Wap } from '../Wap/Wap'
import { SideBar } from './SideBar/SideBar'
import { SIDEBAR_ITEM, COMPONENT, COLUMN, SECTION, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, INNERSECTION, SIDEBAR_SECTION } from '../../js/constants'
import { utilService } from '../../services/util.service'
import { eventBusService } from '../../services/event-bus-service'
import { socketService } from '../../services/socket.service'
import { wapService } from '../../services/waps.service'
import { templateService } from '../../services/template.service'
import { setFooter, setHeader, setLoader } from '../../store/actions/general.actions'
import {
    insert, saveWap, loadWap, setWap, moveSidebarComponentIntoParent, moveSidebarColumnIntoParent,
    moveSidebarInnerSectionIntoParent, moveWithinParent, moveToDifferentParent, updateCmp,
    setSelected, setChatIsEnabled, chatOpeningTextChange, chatAnswerTextChange, dispatchAction,
} from '../../store/actions/wap.actions'


export const Editor = () => {
    const debugMode = false

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const _id = useSelector(state => state.wapReducer._id)
    const cmps = useSelector(state => state.wapReducer.cmps)
    const style = useSelector(state => state.wapReducer.style)
    const name = useSelector(state => state.wapReducer.name)
    const selected = useSelector(state => state.wapReducer.selected)
    const chat = useSelector(state => state.wapReducer.chat)

    const { wapId } = useParams()
    const [wapHistory, setWapHistory] = useState([])

    useEffect(() => {
        ; (async () => {
            dispatch(setLoader(true))
            dispatch(setHeader('min'))
            dispatch(setFooter('display-none'))
            socketService.on('wap add change', wapChangeFromSocket)
            const id = wapId || _id
            if (id) {
                try {
                    await dispatch(loadWap(id))
                } catch (err) {
                    await dispatch(saveWap({ cmps, style }))
                }
            } else {
                await dispatch(saveWap({ cmps, style }))
            }
            dispatch(setLoader(false))
        })()
        return () => {
            dispatch(setHeader(''))
            dispatch(setFooter(''))
            socketService.off('wap add change')
        }
    }, [])

    useEffect(() => {
        if (_id) {
            if (templateService.getTemplatesIds().includes(_id)) {
                dispatch(saveWap({ cmps, style, chat, name }))
                return
            }
            navigate(`/editor/${_id}`, { replace: true })
            socketService.emit('wap room', _id)
        }
    }, [_id])

    useEffect(() => {
        if (!_id || templateService.getTemplatesIds().includes(_id)) return
        wapService.save({ _id, cmps, style, chat, name })
    }, [chat])

    useEffect(() => {
        if (!_id || templateService.getTemplatesIds().includes(_id)) return
        setWapHistory([...wapHistory, JSON.parse(JSON.stringify(cmps))])
        wapService.save({ _id, cmps, style, name })
    }, [cmps])

    const wapChangeFromSocket = action => {
        action.type === 'UNDO' ? onUndo(false, action.lastStep) : dispatch(dispatchAction(action))
    }

    const onUpdateCmp = (comp, field, value) => {
        dispatch(updateCmp(comp, field, value))
    }

    const onUndo = (isEmit = true, socketLastStep = null) => {
        if (wapHistory.length === 1) return
        const lastStep = socketLastStep || wapHistory[wapHistory.length - 2]
        dispatch(setWap(_id, [...lastStep], style, chat, name))
        if (isEmit) {
            socketService.emit('wap new change', { type: 'UNDO', lastStep })
            setWapHistory(wapHistory.slice(0, -2))
        }
    }

    const handleDrop = (dropZone, item) => {
        const toPath = dropZone.path.split("-")
        const pathToDropZone = toPath.slice(0, -1).join("-")
        let newItem = { id: item.id, type: item.type, component: item.component, style: item.style }
        switch (item.type) {
            case COLUMN:
            case SECTION:
            case INNERSECTION:
                newItem.cmps = item.cmps
                break
            case SIDEBAR_COLUMN:
                dispatch(moveSidebarColumnIntoParent(toPath))
                return
            case SIDEBAR_INNERSECTION:
                dispatch(moveSidebarInnerSectionIntoParent(toPath))
                return
            case SIDEBAR_SECTION:
                const newSection = JSON.parse(JSON.stringify(item.component))
                newSection.id = utilService.makeId()
                dispatch(insert(toPath[0], newSection))
                return
            case SIDEBAR_ITEM:
                newItem = {
                    id: utilService.makeId(),
                    type: COMPONENT,
                    component: item.component
                }
                dispatch(moveSidebarComponentIntoParent(toPath, newItem))
                return
        }

        const fromPath = item.path.split("-")
        const pathToItem = fromPath.slice(0, -1).join("-")

        if (fromPath.length === toPath.length) {
            if ((item.type === SECTION || item.type === INNERSECTION) &&
                +fromPath[0] < +toPath[0] &&
                +toPath[0] < cmps.length &&
                +toPath[0] > 0) toPath[0]--
            if (pathToItem === pathToDropZone) {
                dispatch(moveWithinParent(toPath, fromPath))
                return
            }
        }

        dispatch(moveToDifferentParent(toPath, fromPath, newItem))
    }

    const onSelect = (type, path) => {
        eventBusService.emit('componentSelected')
        switch (type) {
            case COMPONENT:
                if (path.length === 3) dispatch(setSelected({ ...cmps[path[0]].cmps[path[1]].cmps[path[2]], path: path }))
                else dispatch(setSelected({ ...cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]], path: path }))
                break
            case COLUMN:
                if (path.length === 2) dispatch(setSelected({ ...cmps[path[0]].cmps[path[1]], path: path }))
                else dispatch(setSelected({ ...cmps[path[0]].cmps[path[1]].cmps[path[2]], path: path }))
                break
            case INNERSECTION:
                dispatch(setSelected({ ...cmps[path[0]].cmps[path[1]], path: path }))
                break
            default:
                dispatch(setSelected({ ...cmps[path[0]], path: path }))
        }
    }

    const getSelected = selected => {
        if (!selected) return
        const { path } = selected
        try {
            switch (path.length) {
                case 1: return { ...cmps[path[0]], path }
                case 2: return { ...cmps[path[0]].cmps[path[1]], path }
                case 3:
                    const currCmp = cmps[path[0]].cmps[path[1]].cmps[path[2]]
                    if (currCmp?.type && currCmp?.type === COLUMN) return { ...currCmp, path }
                    else if (currCmp?.component) return { ...currCmp.component, path }
                default:
                    return { ...cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component, path } || null
            }
        } catch (err) {
            return
        }
    }

    const setChatTxt = ({ target }) => {
        const { name, value } = target
        const func = name === 'openingText' ? chatOpeningTextChange : chatAnswerTextChange
        dispatch(func(value))
    }

    return (
        <section className={`editor ${debugMode ? 'debug' : ''}`}>
            <SideBar
                selected={getSelected(selected)}
                updateCmp={onUpdateCmp}
                onUndo={onUndo}
                chat={chat}
                setChatIsEnabled={(bool) => { dispatch(setChatIsEnabled(bool)) }}
                setChatTxt={setChatTxt}
            />
            <Wap
                cmps={cmps}
                handleDrop={handleDrop}
                updateCmp={onUpdateCmp}
                onSelect={onSelect}
                selected={selected}
                chat={chat}
            />
        </section>
    )
}