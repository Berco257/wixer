import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDrop } from 'react-dnd'
import { COMPONENT, SIDEBAR_ITEM, SECTION, COLUMN } from '../../js/constants'

const ACCEPTS = [SIDEBAR_ITEM, COMPONENT, SECTION, COLUMN]

export const DropZone = ({ data, onDrop, horizontalDrag, maximumSize, accept = ACCEPTS }) => {
  const isEditor = useLocation().pathname.includes('editor')
  const [dragEnter, setDragEnter] = useState(false)

  const [{ canDrop }, drop] = useDrop({
    accept,
    drop: (item) => {
      onDrop(data, item)
    },
    canDrop: (item) => {
      const dropZonePath = data.path
      const splitDropZonePath = dropZonePath.split("-")
      const itemPath = item.path
      
      // sidebar items can always be dropped anywhere
      if (!itemPath) return true
      
      const splitItemPath = itemPath.split("-")
      // Current item can't possible move to it's own location
      if (itemPath === dropZonePath) return false

      // Current area
      if (splitItemPath.length === splitDropZonePath.length) {
        const pathToItem = splitItemPath.slice(0, -1).join("-")
        const currentItemIndex = Number(splitItemPath.slice(-1)[0])

        const pathToDropZone = splitDropZonePath.slice(0, -1).join("-")
        const currentDropZoneIndex = Number(splitDropZonePath.slice(-1)[0])

        if (pathToItem === pathToDropZone) {
          const nextDropZoneIndex = currentItemIndex + 1
          if (nextDropZoneIndex === currentDropZoneIndex) return false
        }
      }

      return true
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    })
  })

  return (
    <>
      {!isEditor && <></>}
      {isEditor && (
        <div
          className={`drop-zone${(canDrop) ? ' active' : ''}${(maximumSize) ? ' maximum-size' : ''}${(horizontalDrag) ? ' horizontal-drag' : ''}`}
          ref={drop}
          onDragEnter={() => { setDragEnter(true) }}
          onDragLeave={() => { setDragEnter(false) }}
        />
      )}
    </>
  )
}
