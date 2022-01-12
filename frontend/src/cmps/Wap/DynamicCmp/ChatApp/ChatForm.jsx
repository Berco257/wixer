import React from 'react'
import TextField from '@mui/material/TextField'

export const ChatForm = ({ onSubmit, onChange, currentMessage }) => {
    return (
        <form className="flex" onSubmit={onSubmit}>
            <button><i className="fas fa-paper-plane"></i></button>
            <TextField
                className="chat-input-message"
                type="text"
                label="Enter your message"
                name="message"
                variant="outlined"
                value={currentMessage}
                onChange={onChange} />
        </form>
    )
}