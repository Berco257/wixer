import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { red } from '@mui/material/colors'

export const ItemRemoveMsg = ({ itemName, itemId, removeModal, closeRemoveModal }) => {
    return (
        <div className="item-remove-msg">
            <Dialog
                open={removeModal}
                onClose={() => closeRemoveModal('')}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`Are you sure you want to delete the ${itemName}?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeRemoveModal('')}>
                        Cancel
                    </Button>
                    <Button
                        sx={{ color: red[500] }}
                        onClick={() => closeRemoveModal(itemId)}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}