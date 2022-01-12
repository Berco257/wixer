import React from 'react'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import { red, green } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export const WapHeader = ({ wap, wapToShow, open, handleClick, anchorEl, handleClose, ITEM_HEIGHT, options }) => {
    return (
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: wapToShow.name ? green[500] : red[500] }} aria-label="recipe">
                    W
                </Avatar>
            }
            action={
                <>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls="long-menu"
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon fontSize="large" />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 'auto',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={option}
                                selected={option === 'Pyxis'}
                                onClick={() => handleClose(option)}
                                className={option === 'Delete' ? 'red-color' : ''}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            }
            title={wapToShow.name ? wapToShow.name : 'Not published'}
            subheader={new Date(wap.createdAt).toLocaleDateString()}
        />
    )
}