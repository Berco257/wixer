import React from 'react'

export const Video = ({ data, style }) => {
    
    return (
        <iframe
            style={style}
            src={`https://www.youtube.com/embed/${data.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        >
        </iframe>
    )
}