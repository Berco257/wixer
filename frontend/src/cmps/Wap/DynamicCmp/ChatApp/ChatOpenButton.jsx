import React from 'react'

export const ChatOpenButton = ({ setIsChatVisible }) => {
    return (
        <div className="chat-open-chat" onClick={() => setIsChatVisible(true)}>
            <i className="fas fa-comments"></i>
        </div>
    )
}