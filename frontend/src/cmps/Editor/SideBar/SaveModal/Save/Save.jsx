import React from 'react'
import { SaveBody } from './SaveBody'
import { SaveHead } from './SaveHead'
import { SaveNav } from './SaveNav'

export const Save = ({ isPublish, name, setIsModalOpen, setCopyText, copyText }) => {
    return (
        <div className="site-saved-modal flex direction-column justify-center">
            <SaveHead
                setIsModalOpen={setIsModalOpen}
            />
            <SaveBody />
            <SaveNav
                setIsModalOpen={setIsModalOpen}
                isPublish={isPublish}
                name={name}
                setCopyText={setCopyText}
                copyText={copyText}
            />
        </div>
    )
}