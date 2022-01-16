import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { isMobile } from 'react-device-detect'
import { LoaderSmall } from '../../assets/images/LoaderSmall'
import { SIDEBAR_ITEM, COMPONENT, COLUMN, SECTION, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, SIDEBAR_SECTION } from '../../js/constants'
import { DropZone } from './DropZone'
import { ChatApp } from './DynamicCmp/ChatApp/ChatApp'
import { EmptyWap } from './EmptyWap'
import { SectionList } from './SectionList'
import { socketService } from '../../services/socket.service'
import Pointer from '../../assets/images/pointer.svg'

export const Wap = ({ cmps, handleDrop, updateCmp, onSelect, selected, chat }) => {
    const isEditor = useLocation().pathname.includes('editor')
    const ref = useRef(null)
    const [mousePos, setMousePos] = useState({ clientX: 0, clientY: 0 })
    const [isMouseActive, setIsMouseActive] = useState(false)

    useEffect(() => {
        if (isEditor) socketService.on('mouse update', onMouseUpdate)
        return () => {
            if (isEditor) socketService.off('mouse update')
        }
    }, [])

    let timeoutMousePos
    let timeoutIsMouseActive
    const onMouseUpdate = pos => {
        if (!isMouseActive) setIsMouseActive(true)

        const scroll = ref.current.scrollTop
        pos.clientY = pos.clientY - scroll

        clearTimeout(timeoutMousePos)
        timeoutMousePos = setTimeout(() => {
            setMousePos(pos)
        }, 0)

        clearTimeout(timeoutIsMouseActive)
        timeoutIsMouseActive = setTimeout(() => {
            setIsMouseActive(false)
        }, 1000)
    }

    const mouseOver = ({ clientX, clientY }) => {
        const scroll = ref.current.scrollTop
        const pos = { clientX , clientY: clientY + scroll }
        socketService.emit('mouse move', pos)
    }

    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <section ref={ref} onDrag={isEditor ? mouseOver : () => { }} onMouseMove={isEditor ? mouseOver : () => { }} className="page-container">
                {!cmps && <LoaderSmall />}
                {cmps && (
                    <div className="page flex direction-column">
                        <SectionList
                            sections={cmps}
                            handleDrop={handleDrop}
                            updateCmp={updateCmp}
                            onSelect={onSelect}
                            selected={selected}
                        />
                        <DropZone
                            data={{ path: `${cmps.length}`, childrenCount: cmps.length }}
                            maximumSize
                            accept={[SIDEBAR_ITEM, SIDEBAR_SECTION, COMPONENT, SECTION, COLUMN, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION]}
                            onDrop={handleDrop}
                            isLast
                        />
                        {isEditor && !cmps.length && <EmptyWap />}
                        {chat.isEnabled && <ChatApp openingText={chat.openingText} answerText={chat.answerText} />}
                    </div>
                )}
                {isEditor && isMouseActive && (
                    <img className='user-pointer' style={{ top: mousePos.clientY, left: mousePos.clientX }} src={Pointer} />
                )}
            </section>
        </DndProvider>
    )
}