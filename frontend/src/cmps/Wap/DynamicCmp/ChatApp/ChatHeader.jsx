import React from 'react'

export const ChatHeader = ({ setIsChatVisible }) => {
    return (
        <div className="chat-header flex align-center justify-center">
            <i className="chat-close fas fa-times" onClick={() => setIsChatVisible(false)}></i>
            <div className="chat-title">How can i help you?</div>
        </div>
    )
}