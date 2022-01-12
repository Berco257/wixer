import React from 'react'
export const ChatBody = ({ chat }) => {
    return (
        <div className="chat-body">
            <ul>
                {chat.map((msg, idx) => {
                    return (
                        <li key={idx}
                            className={`flex align-center
                            ${msg.sender === 'site' ? ' chat-message-site' : ' chat-message-user justify-end'}`}
                        >
                            {msg.txt}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}