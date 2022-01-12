import React from 'react'
import List from '@mui/material/List'
import { LeadPreview } from './LeadPreview'

export const LeadList = ({ wap, onSetWap, leads, isMarkedLeads }) => {
    const setWap = (newLeads) => {
        const newWap = ({ ...wap, leads: newLeads })
        onSetWap(newWap)
    }

    const getLeadIdxById = (leadId) => {
        return wap.leads.findIndex(lead => {
            return lead.id === leadId
        })
    }

    const onRemove = (leadId) => {
        const leadIdx = getLeadIdxById(leadId)
        const newLeads = [...wap.leads]
        newLeads.splice(leadIdx, 1)
        setWap(newLeads)
    }
    
    const handleChange = ({ target }) => {
        const leadIdx = getLeadIdxById(target.name)
        const newLeads = [...wap.leads]
        newLeads[leadIdx] = { ...newLeads[leadIdx], isDone: target.checked }
        setWap(newLeads)
    }

    return (
        <List className="lead-list"
            sx={{ opacity: (isMarkedLeads) ? 0.6 : 1, width: '100%', bgcolor: 'background.paper' }}>
            {leads.map((lead, idx) => {
                return (
                    <LeadPreview
                        key={lead.id || idx}
                        lead={lead}
                        handleChange={handleChange}
                        onRemove={onRemove}
                        isMarkedLead={isMarkedLeads}
                    />)
            })}
        </List >
    )
}