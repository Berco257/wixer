import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDrag } from 'react-dnd'
import { DropZone } from './DropZone'
import { Actions } from './Actions'
import { COLUMN, COMPONENT, SIDEBAR_ITEM } from '../../js/constants'
import { translateStyle } from '../../services/util.service'
import { CmpList } from './CmpList'

export const Column = ({ column, handleDrop, path, updateCmp, onSelect, selected }) => {
  const isEditor = useLocation().pathname.includes('editor')

  const ref = useRef(null)
  const style = translateStyle({ ...column.style })
  const [actionsVisible, setActionsVisible] = useState(false)

  const [{ isDragging }, drag] = useDrag({
    type: COLUMN,
    item: {
      type: COLUMN,
      id: column.id,
      cmps: column.cmps,
      style: column.style,
      path
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  })

  const opacity = isDragging ? 0.2 : 1
  drag(ref)

  const select = (ev) => {
    ev.stopPropagation()
    onSelect('column', path.split('-'))
  }

  return (
    <div
      ref={isEditor ? ref : null}
      style={{ ...style, opacity }}
      className={`base draggable column flex direction-column${selected && selected.id === column.id ? ' selected' : ''}${actionsVisible ? ' element-hover' : ''}`}
      onClick={isEditor ? select : () => { }}
      onMouseEnter={isEditor ? () => { setActionsVisible(true) } : () => { }}
      onMouseLeave={isEditor ? () => { setActionsVisible(false) } : () => { }}
    >
      <CmpList
        column={column}
        path={path}
        handleDrop={handleDrop}
        updateCmp={updateCmp}
        onSelect={onSelect}
        selected={selected}
      />
      <DropZone
        data={{ path: `${path}-${column.cmps.length}`, childrenCount: column.cmps.length }}
        onDrop={handleDrop}
        accept={[COMPONENT, SIDEBAR_ITEM]}
        isLast
      />
      {actionsVisible && <Actions path={path} type={COLUMN} />}
    </div>
  )
}