import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

export const AddImage = ({ onAdd }) => {
    return (
        <div className="add-image" title="add new image">
            <AddPhotoAlternateIcon onClick={onAdd} />
        </div>
    )
}