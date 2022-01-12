import React from 'react'
import { DropZone } from './DropZone'
import { Column } from './Column'
import { COLUMN, SIDEBAR_COLUMN, COMPONENT, SIDEBAR_ITEM } from '../../js/constants'
import { useLocation } from 'react-router-dom'

export const ColumnList = ({ innerSection, path, handleDrop, updateCmp, onSelect, selected }) => {
    const isEditor = useLocation().pathname.includes('editor')

    return (
        <>
            {innerSection.cmps.map((column, idx) => {
                const currentPath = `${path}-${idx}`
                return (
                    <React.Fragment key={column.id}>
                        <DropZone
                            data={{ path: currentPath, childrenCount: innerSection.cmps.length }}
                            accept={[COMPONENT, SIDEBAR_ITEM, COLUMN, SIDEBAR_COLUMN]}
                            onDrop={handleDrop}
                            horizontalDrag={true}
                        />
                        <Column
                            column={column}
                            handleDrop={handleDrop}
                            path={currentPath}
                            updateCmp={updateCmp}
                            onSelect={onSelect}
                            selected={selected}
                            onClick={isEditor ? () => { onSelect('column', column) } : () => { }}
                        />
                    </React.Fragment>
                )
            })}</>
    )
}