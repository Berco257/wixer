import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export const MsgSent = ({ isOpen, setIsOpen, backgroundColor }) => {

    return (
        <Dialog
            open={isOpen}
            onClose={() => { setIsOpen(false) }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth='xs'
        >
            <DialogTitle id="alert-dialog-title">
                {"Message Sent"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your message was sent successfully.
                    We will get back to you soon. Thank you.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={() => { setIsOpen(false) }}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}