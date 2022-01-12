import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDrag, useDrop } from 'react-dnd'
import { SECTION, SIDEBAR_ITEM, COMPONENT, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, INNERSECTION, COLUMN } from '../../js/constants'
import { DropZone } from './DropZone'
import { Actions } from './Actions'
import { SectionChildList } from './SectionChildList'

export const SectionPreview = ({ section, handleDrop, path, updateCmp, onSelect, selected }) => {
  const isEditor = useLocation().pathname.includes('editor')
  const ref = useRef(null)
  const hasOnlyInnersections = (section.cmps.some(cmp => cmp.type === INNERSECTION))
  const [actionsVisible, setActionsVisible] = useState(false)
  const [, drop] = useDrop({ accept: SECTION })
  const [{ isDragging }, drag] = useDrag({
    type: SECTION,
    item: {
      type: SECTION,
      id: section.id,
      path,
      style: section.style,
      children: section.children,
    },
    collect: monitor => ({ isDragging: monitor.isDragging() })
  })

  const opacity = isDragging ? 0.2 : 1
  drag(drop(ref))

  const select = (ev) => {
    ev.stopPropagation()
    onSelect('section', path.split('-'))
  }

  return (
    <section
      id={path}
      ref={isEditor ? ref : null}
      style={{ ...section.style, opacity }}
      className={`section draggable ${(hasOnlyInnersections) ? ' flex direction-column' : ' flex'} ${selected && selected.id === section.id ? 'selected' : ''} ${actionsVisible ? 'element-hover' : ''}`}
      onClick={isEditor ? select : () => { }}
      onMouseEnter={isEditor ? () => { setActionsVisible(true) } : () => { }}
      onMouseLeave={isEditor ? () => { setActionsVisible(false) } : () => { }}
    >
      <SectionChildList
        section={section}
        hasOnlyInnersections={hasOnlyInnersections}
        handleDrop={handleDrop}
        updateCmp={updateCmp}
        onSelect={onSelect}
        selected={selected}
        path={path}
      />
      <DropZone
        data={{ path: `${path}-${section.cmps.length}`, childrenCount: section.cmps.length }}
        accept={(hasOnlyInnersections) ? [INNERSECTION, SIDEBAR_INNERSECTION] :
          (section.cmps.length >= 4) ? [COLUMN] : [SIDEBAR_ITEM, COMPONENT, SIDEBAR_COLUMN, COLUMN]}
        onDrop={handleDrop}
        horizontalDrag={(hasOnlyInnersections) ? false : true}
        isLast
      />
      {actionsVisible && <Actions path={path} type={SECTION} />}
    </section>
  )
}