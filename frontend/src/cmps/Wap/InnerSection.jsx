import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDrag } from 'react-dnd'
import { translateStyle } from '../../services/util.service'
import { INNERSECTION, COLUMN, SIDEBAR_COLUMN, COMPONENT, SIDEBAR_ITEM } from '../../js/constants'
import { DropZone } from './DropZone'
import { Actions } from './Actions'
import { ColumnList } from './ColumnList'

export const InnerSection = ({ innerSection, handleDrop, path, updateCmp, onSelect, selected }) => {
    const isEditor = useLocation().pathname.includes('editor')

    const ref = useRef(null)
    const [actionsVisible, setActionsVisible] = useState(false)
    const style = translateStyle({ ...innerSection.style })

    const [{ isDragging }, drag] = useDrag({
        type: INNERSECTION,
        item: {
            type: INNERSECTION,
            style: innerSection.style,
            id: innerSection.id,
            cmps: innerSection.cmps,
            path
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0.2 : 1
    drag(ref)

    const select = (ev) => {
        ev.stopPropagation()
        onSelect('innersection', path.split('-'))
    }

    return (
        <div
            ref={isEditor ? ref : null}
            style={{ ...style, opacity }}
            onClick={isEditor ? select : () => { }}
            className={`base draggable innersection flex ${selected && selected.id === innerSection.id ? 'selected' : ''} ${actionsVisible ? 'element-hover' : ''}`}
            onMouseEnter={isEditor ? () => { setActionsVisible(true) } : () => { }}
            onMouseLeave={isEditor ? () => { setActionsVisible(false) } : () => { }}
        >
            <ColumnList
                innerSection={innerSection}
                path={path}
                handleDrop={handleDrop}
                updateCmp={updateCmp}
                onSelect={onSelect}
                selected={selected}
            />
            <DropZone
                data={{ path: `${path}-${innerSection.cmps.length}`, childrenCount: innerSection.cmps.length }}
                accept={[COMPONENT, SIDEBAR_ITEM, COLUMN, SIDEBAR_COLUMN]}
                onDrop={handleDrop}
                horizontalDrag={true}
            // isLast
            />
            {actionsVisible && <Actions path={path} type={INNERSECTION} />}
        </div>
    )
}