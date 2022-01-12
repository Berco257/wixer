import React, { useEffect, useState } from 'react'
import { ChatOpenButton } from './ChatOpenButton'
import { ChatHeader } from './ChatHeader'
import { ChatBody } from './ChatBody'
import { ChatForm } from './ChatForm'

export const ChatApp = ({ openingText, answerText }) => {
    const [isChatVisible, setIsChatVisible] = useState(false)
    const [chat, setChat] = useState([{ sender: 'site', txt: openingText }])
    const [currentMessage, setCurrentMessage] = useState('')
    let timeout = 0

    useEffect(() => {
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    const onSubmit = (el) => {
        el.preventDefault()
        const newChat = [...chat, { sender: 'user', txt: currentMessage }]
        setChat(newChat)
        setCurrentMessage('')
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            setChat([...newChat, { sender: 'site', txt: answerText }])
        }, 3000)
    }

    const onChange = ({ target }) => {
        setCurrentMessage(target.value)
    }

    return (
        <div className="chat-app">
            {isChatVisible && (
                <div className="chat-zone">
                    <ChatHeader setIsChatVisible={setIsChatVisible} />
                    <ChatBody chat={chat} />
                    <ChatForm onSubmit={onSubmit} onChange={onChange} currentMessage={currentMessage} />
                </div>
            )}
            <ChatOpenButton setIsChatVisible={setIsChatVisible} />

        </div>
    )
}