import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube'

export const YouTubeEdit = ({ data, handleChange }) => {
    return (
        <div className="video-edit">
            <label htmlFor="video-id">Enter YouTube video Id</label>
            <input type="text" name="videoId" id="video-id" defaultValue={data.videoId} onChange={handleChange} />
            <div className="youtube">
                <YouTubeIcon />
            </div>
        </div>
    )
}