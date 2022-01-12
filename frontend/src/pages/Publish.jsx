
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wap } from '../cmps/Wap/Wap'
import { useParams, useNavigate } from 'react-router-dom'
import { setFooter, setHeader } from '../store/actions/general.actions'
import { loadWap } from '../store/actions/wap.actions'

export const Publish = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { wapId, wapName } = useParams()
    const cmps = useSelector(state => state.wapReducer.cmps)
    const chat = useSelector(state => state.wapReducer.chat)

    useEffect(() => {
        dispatch(setHeader('display-none'))
        dispatch(setFooter('display-none'))
        return () => {
            dispatch(setHeader(''))
            dispatch(setFooter(''))
        }
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                if (wapId || wapName) await dispatch(loadWap(wapId, wapName))
            } catch (err) {
                navigate('/404', { replace: true })
            }
        })()
    }, [wapId, wapName])

    return (
        <section className="publish editor">
            <Wap
                cmps={cmps}
                chat={chat}
            />
        </section>
    )
}