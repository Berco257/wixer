import React from 'react'
import { DropZone } from './DropZone'
import { SIDEBAR_ITEM, COMPONENT, COLUMN, SECTION, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, INNERSECTION, SIDEBAR_SECTION } from '../../js/constants'
import { SectionPreview } from './SectionPreview'

export const SectionList = ({ sections, handleDrop, updateCmp, onSelect, selected }) => {
    return (
        <>
            {sections.map((section, index) => {
                const currentPath = `${index}`
                return (
                    <React.Fragment key={section.id}>
                        <DropZone
                            data={{ path: currentPath, childrenCount: sections.length }}
                            onDrop={handleDrop}
                            path={currentPath}
                            accept={[INNERSECTION, SIDEBAR_SECTION, SIDEBAR_ITEM, COMPONENT, SECTION, COLUMN, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION]}
                        />
                        <SectionPreview
                            section={section}
                            handleDrop={handleDrop}
                            path={currentPath}
                            updateCmp={updateCmp}
                            onSelect={onSelect}
                            selected={selected}
                        />
                    </React.Fragment>
                )
            })}
        </>
    )
}