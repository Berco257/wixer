import React from 'react'
import { useLocation } from 'react-router-dom'
import { DropZone } from './DropZone'
import { SIDEBAR_ITEM, COMPONENT, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, INNERSECTION, COLUMN } from '../../js/constants'
import { Column } from './Column'
import { InnerSection } from './InnerSection.jsx'

export const SectionChildList = ({ section, hasOnlyInnersections, handleDrop, updateCmp, onSelect, selected, path }) => {
    const isEditor = useLocation().pathname.includes('editor')

    const getProps = (type, child, currentPath) => {
        const props = {
            handleDrop,
            path: currentPath,
            updateCmp,
            onSelect,
            selected,
            onClick: isEditor ? () => { onSelect(type, child) } : () => { }
        }
        type === COLUMN ? props.column = child : props.innerSection = child
        return props
    }

    return (
        <>
            {section.cmps.map((child, idx) => {
                const currentPath = `${path}-${idx}`
                return (
                    <React.Fragment key={child.id}>
                        <DropZone
                            data={{ path: currentPath, childrenCount: section.cmps.length, }}
                            accept={(hasOnlyInnersections) ? [INNERSECTION, SIDEBAR_INNERSECTION] : (section.cmps.length >= 4) ? [COLUMN] : [SIDEBAR_ITEM, COMPONENT, SIDEBAR_COLUMN, COLUMN]}
                            onDrop={handleDrop}
                            horizontalDrag={(hasOnlyInnersections) ? false : true}
                        />
                        {child.type === COLUMN && <Column {...getProps('column', child, currentPath)} />}
                        {child.type === INNERSECTION && <InnerSection {...getProps('innersection', child, currentPath)} />}
                    </React.Fragment>
                )
            })}
        </>
    )
}