import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'

import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MailIcon from '@mui/icons-material/Mail'
import { LeadList } from '../LeadList'
import { ItemRemoveMsg } from '../ItemRemoveMsg'
import { wapService } from '../../../services/waps.service'
import NoAvailableImg from '../../../assets/images/no-available-img.jpg'
import { WapHeader } from './WapHeader'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const options = [
    'Edit',
    'Preview',
    'Delete'
]

const ITEM_HEIGHT = 48

export const WapPreview = ({ wap, onRemove }) => {
    const [expanded, setExpanded] = useState(false)
    const [wapToShow, setWap] = useState(wap)
    const [removeModal, setRemoveModal] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    useEffect(() => {
        setWap(wap)
    }, [wap.leads?.length])

    const openRemoveModal = () => {
        setRemoveModal(true)
    }

    const closeRemoveModal = async (wapId) => {
        setRemoveModal(false)
        if (wapId) {
            try {
                await wapService.remove(wapId)
                onRemove(wapId)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const onSetWap = async (wap) => {
        let newWap = { ...wap }
        delete newWap.owner
        await wapService.save(newWap)
        setWap(wap)
    }

    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/public/websites-screenshots?imgId='
        : 'http://localhost:3030/public/websites-screenshots?imgId='

    const [previewImage, setImage] = useState(wap.screenshot?.url)

    const handleError = () => {
        setImage(NoAvailableImg)
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = async (option) => {
        setAnchorEl(null)
        switch (option) {
            case 'Edit':
                window.location.replace(`/editor/${wapToShow._id}`)
                break
            case 'Preview':
                if (wapToShow.name) window.open(`/${wapToShow.name}`, '_blank')
                else window.open(`/preview/${wapToShow._id}`)
                break
            case 'Delete':
                openRemoveModal()
                break
            default:
                break
        }
    }

    const getNewLeads = () => {
        if (!wapToShow.leads) return []
        const newLeads = wapToShow.leads.filter(lead => {
            return !lead.isDone
        })
        return newLeads
    }

    const getMarkedLeads = () => {
        if (!wapToShow.leads) return []
        const markedLeads = wapToShow.leads.filter(lead => {
            return lead.isDone
        })
        return markedLeads
    }

    return (
        <div className="wap-preview">
            <ItemRemoveMsg
                itemName={'website'}
                itemId={wapToShow._id}
                removeModal={removeModal}
                closeRemoveModal={closeRemoveModal}
            />
            <Card>
                <WapHeader
                    wap={wap}
                    wapToShow={wapToShow}
                    open={open}
                    handleClick={handleClick}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    ITEM_HEIGHT={ITEM_HEIGHT}
                    options={options}
                />
                <CardMedia
                    component="div"
                    height="194"
                    // image={previewImage}
                    // onError={handleError}
                    alt={wapToShow.name ? wapToShow.name : wapToShow._id}
                    sx={{ objectPosition: "top", textAlign: 'center' }}
                >

                    <h2>{wap.name || wap._id}</h2>
                </CardMedia>
                <CardActions disableSpacing>
                    <Badge badgeContent={wapToShow.leads ? getNewLeads().length : 0} color="primary">
                        <MailIcon fontSize="large" color="action" />
                    </Badge>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon fontSize="large" />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {getNewLeads().length > 0 && (
                            <>
                                <Typography paragraph sx={{ fontWeight: 'bold', marginBottom: 0 }}>
                                    New leads:
                                </Typography>
                                <LeadList wap={wapToShow} onSetWap={onSetWap} leads={getNewLeads()} />
                            </>
                        )}
                        {getMarkedLeads().length > 0 && (
                            <>
                                <Typography paragraph sx={{ fontWeight: 'bold', marginBottom: 0 }}>
                                    Marked leads:
                                </Typography>
                                <LeadList isMarkedLeads={true} wap={wapToShow} onSetWap={onSetWap} leads={getMarkedLeads()} />
                            </>
                        )}
                    </CardContent>
                </Collapse>
            </Card>
        </div >
    )
}