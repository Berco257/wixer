import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

export const SaveHead = ({ setIsModalOpen }) => {
    return (
        <div className="flex justify-between">
            <h2>Site Saved</h2>
            <CloseIcon
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
            />
        </div>
    )
}