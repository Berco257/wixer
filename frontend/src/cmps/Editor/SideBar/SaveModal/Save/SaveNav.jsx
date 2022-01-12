import React from 'react'
import { Link } from 'react-router-dom'

export const SaveNav = ({ setIsModalOpen, isPublish, name, setCopyText, copyText }) => {
    const onCopyLink = () => {
        navigator.clipboard.writeText(`https://wixer-app.herokuapp.com/${name}`)
        setCopyText('Link copied!')
        setTimeout(() => { setCopyText('Copy link') }, 2000)
    }

    return (
        <div className="actions flex justify-between">
            <Link className="modal-link dashboard" onClick={() => setIsModalOpen(false)} to="/dashboard">Dashboard</Link>
            {isPublish && name && (
                <>
                    <div className="modal-link" onClick={onCopyLink}>{copyText}</div>
                    <a className="modal-link" href={`/${name}`} target='_blank'>Go to site</a>
                </>
            )}
        </div>
    )
}