import React from 'react'

export const SavePublish = ({ setIsPublishModal, setIsModalOpen }) => {
    const getButton = (type, isPublishModal, isModalOpen) => {
        return (
            <div
                className={type === 'publish' ? 'pub' : 'save'}
                onClick={() => {
                    setIsPublishModal(isPublishModal)
                    setIsModalOpen(isModalOpen)
                }}
            >
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
        )
    }

    return (
        <div className="save-pub">
            {getButton('save', false, true)}
            {getButton('publish', true, true)}
        </div>
    )
}