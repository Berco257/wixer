import React from 'react'

export const ImageLabel = ({ image, idx, handleChange }) => {
    return (
        <div className="label">
            <input
                type="text"
                title="image title"
                value={image.label}
                name={idx}
                onChange={handleChange}
            />
        </div>
    )
}