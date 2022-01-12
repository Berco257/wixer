import React from 'react'
import { DropZone } from './DropZone'
import { COMPONENT, SIDEBAR_ITEM } from '../../js/constants'
import { DynamicCmp } from './DynamicCmp/DynamicCmp'

export const CmpList = ({ column, path, handleDrop, updateCmp, onSelect, selected }) => {
    return (
        <>
            {column.cmps.map((cmp, index) => {
                const currentPath = `${path}-${index}`
                return (
                    <React.Fragment key={cmp.id}>
                        <DropZone
                            data={{ path: currentPath, childrenCount: column.cmps.length }}
                            onDrop={handleDrop}
                            accept={[COMPONENT, SIDEBAR_ITEM]}
                        />
                        <DynamicCmp
                            cmp={cmp}
                            path={currentPath}
                            updateCmp={updateCmp}
                            select={onSelect}
                            selected={selected}
                        />
                    </React.Fragment>
                )
            })}
        </>
    )
}