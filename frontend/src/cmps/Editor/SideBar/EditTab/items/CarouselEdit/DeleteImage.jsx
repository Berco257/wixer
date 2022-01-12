import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

export const DeleteImage = ({ idx, onRemove }) => {
    return (
        <div className="delete">
            <div className="button" onClick={() => onRemove(idx)} title="delete image">
                <DeleteIcon />
            </div>
        </div>
    )
}