import React, { useState } from 'react'
import { Accordion, AccordionSummary } from '../../../Mui/Accordion'
import { AccordionDetails } from '../../../Mui/Accordion'
import { AccordionList } from './AccordionList'
import { SideBarItem } from './SideBarItem'
import { AccordionPreviewChat } from './AccordionPreviewChat'

export const AddTab = ({ chat, setChatIsEnabled, setChatTxt }) => {
    const [expanded, setExpanded] = useState('header')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <div className="sidebar-add-component">
            {AccordionList.map(accordion => {
                return (
                    <Accordion key={accordion.name} expanded={expanded === accordion.name} onChange={handleChange(accordion.name)}>
                        <AccordionSummary sx={{ paddingBlock: 10 }} aria-controls={`${accordion.name}d-content`} id={`${accordion.name}d-header`}>
                            {accordion.title || accordion.name.charAt(0).toUpperCase() + accordion.name.slice(1)}
                        </AccordionSummary>
                        <AccordionDetails className={accordion.className || `${accordion.name}-items`}>
                            {accordion.name === 'chat' ? (
                                <AccordionPreviewChat
                                    chat={chat}
                                    setChatTxt={setChatTxt}
                                    setChatIsEnabled={setChatIsEnabled}
                                />
                            ) : (
                                <>
                                    {accordion.items.map(item => {
                                        return (
                                            <SideBarItem key={item.id} data={item} type={item.type} />
                                        )
                                    })}
                                </>
                            )}
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}