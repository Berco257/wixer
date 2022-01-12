import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '../../../../Mui/Accordion'

export const RenderProps = ({ propList }) => {
    const [expanded, setExpanded] = useState(propList[0].name)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <>
            {propList.map(prop => {
                return (
                    <Accordion key={prop.name} expanded={expanded === prop.name} onChange={handleChange(prop.name)}>
                        <AccordionSummary aria-controls={`${prop.name}d-content`} id={`${prop.name}d-header`}>
                            {prop.name.charAt(0).toUpperCase() + prop.name.slice(1)}
                        </AccordionSummary>
                        <AccordionDetails>
                            {prop.cmp}
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </>
    )
}