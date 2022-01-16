import React from 'react'
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
import { useState } from 'react'
import { useEffect } from 'react'

export const Wap = ({ cmps, handleDrop, updateCmp, onSelect, selected, chat }) => {
    const isEditor = useLocation().pathname.includes('editor')
    const [mousePos, setMousePos] = useState({ offsetX: 0, offsetY: 0 })
    const [isMouseActive, setIsMouseActive] = useState(false)

    useEffect(() => {
        socketService.on('mouse update', onMouseUpdate)
        return () => {
            socketService.off('mouse update')
        }
    }, [])

    let timeout
    const onMouseUpdate = pos => {
        if (!isMouseActive) setIsMouseActive(true)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            setMousePos(pos)
        }, 0)
    }

    const mouseOver = ({ clientX, clientY }) => {
        const pos = { clientX, clientY }
        socketService.emit('mouse move', pos)
    }

    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <section onMouseMove={isEditor ? mouseOver : () => { }} className="page-container">
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