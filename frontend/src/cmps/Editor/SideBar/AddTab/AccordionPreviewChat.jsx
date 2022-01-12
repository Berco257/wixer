import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'

export const AccordionPreviewChat = ({ chat, setChatTxt, setChatIsEnabled }) => {
    return (
        <>
            <div className="flex justify-between align-center">
                <label htmlFor="chat">Enable chat</label>
                <Checkbox
                    name="chat"
                    id="chat"
                    checked={chat.isEnabled}
                    onChange={({ target }) => { setChatIsEnabled(target.checked) }}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{ padding: 0 }}
                />
            </div>
            <TextField
                label="Opening text:"
                multiline
                rows={4}
                value={chat.openingText}
                id="opening-text"
                name="openingText"
                onChange={setChatTxt}
            />
            <TextField
                label=" Answer text:"
                multiline
                rows={4}
                value={chat.answerText}
                id="answer-text"
                name="answerText"
                onChange={setChatTxt}
            />
        </>
    )
}