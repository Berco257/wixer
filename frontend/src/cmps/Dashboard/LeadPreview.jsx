import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { blue } from '@mui/material/colors'
import { ItemRemoveMsg } from './ItemRemoveMsg'

export const LeadPreview = ({ lead, handleChange, onRemove, isMarkedLead }) => {
    const [removeModal, setRemoveModal] = useState(false)

    const openRemoveModal = () => {
        setRemoveModal(true)
    }

    const closeRemoveModal = leadId => {
        setRemoveModal(false)
        if (leadId) onRemove(leadId)
    }
    
    return (
        <React.Fragment>
            <ItemRemoveMsg
                itemName={'lead'}
                itemId={lead.id}
                removeModal={removeModal}
                closeRemoveModal={closeRemoveModal}
            />
            <ListItem
                className="item"
                sx={{ paddingInline: 0 }}
                alignItems="flex-start"
            >
                <ListItemAvatar
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        justifyContent: 'flex-end',
                        minWidth: 100
                    }}>
                    <Avatar sx={{ bgcolor: isMarkedLead ? blue[300] : blue[500] }}
                        aria-label="recipe">
                        {lead.name && lead.name.charAt(0).toUpperCase()}
                    </Avatar>

                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            {`${new Date(lead.date).toLocaleDateString()} — `}
                            {lead.subject}
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {lead.name && lead.name + ' — '}
                            </Typography>
                            {lead.phone && lead.phone + ' — '}
                            {lead.email && (lead.email + ' — ')}
                            {lead.msg && lead.msg}
                            {lead.id && (
                                <span className="action">
                                    <Checkbox
                                        className="mark"
                                        name={lead.id}
                                        checked={!lead.isDone ? false : true}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <DeleteForeverIcon
                                        className="remove"
                                        onClick={() => openRemoveModal(false, lead.id)}
                                    />
                                </span>
                            )}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ marginLeft: "100px" }} />
        </React.Fragment>
    )
}