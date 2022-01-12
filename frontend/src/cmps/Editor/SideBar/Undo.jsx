import React from 'react'
import HistoryIcon from '@mui/icons-material/History'

export const Undo = ({ onUndo }) => {
    return (
        <div className="undo-wrapper">
            <div>Undo</div>
            <button className="undo" onClick={onUndo} title="undo">
                <HistoryIcon />
            </button>
        </div>
    )
}