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

export const Wap = ({ cmps, handleDrop, updateCmp, onSelect, selected, chat }) => {
    const isEditor = useLocation().pathname.includes('editor')

    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <section className="page-container">
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
            </section>
        </DndProvider>
    )
}