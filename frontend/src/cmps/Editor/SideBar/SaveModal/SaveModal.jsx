import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Dialog from '@mui/material/Dialog'
import { LoginSignup } from '../../../LoginSignup/LoginSignup'
import { Publish } from './Publish'
import { Save } from './Save/Save'


export const SaveModal = ({ name, isModalOpen, setIsModalOpen, onSave, isPublish }) => {
    const user = useSelector(state => state.userReducer.user)
    const [siteName, setSiteName] = useState('')
    const [isNameAvailable, setIsNameAvailable] = useState(true)
    const [loading, setLoading] = useState(false)
    const [copyText, setCopyText] = useState('Copy link')
    const [mode, setMode] = useState('login')

    useEffect(() => {
        if (user) onSave()
    }, [user])

    return (
        <div className="save-modal">
            <Dialog open={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
                {!user && <LoginSignup mode={mode} setMode={setMode} />}
                {user && isPublish && !name && (
                    <Publish
                        setLoading={setLoading}
                        loading={loading}
                        setIsNameAvailable={setIsNameAvailable}
                        isNameAvailable={isNameAvailable}
                        onSave={onSave}
                        setIsModalOpen={setIsModalOpen}
                        siteName={siteName}
                        setSiteName={setSiteName}
                    />
                )}
                {user && (name || !isPublish) && (
                    <Save
                        isPublish={isPublish}
                        name={name}
                        setIsModalOpen={setIsModalOpen}
                        setCopyText={setCopyText}
                        copyText={copyText}
                    />
                )}
            </Dialog>
        </div>
    )
}

