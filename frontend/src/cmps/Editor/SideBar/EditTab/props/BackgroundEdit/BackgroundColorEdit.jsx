import React from 'react'

export const BackgroundColorEdit = ({ backgroundColor = '#ffffff', handleChange }) => {
    return (
        <div className="bg-color-input">
            <div className="label">
                <label htmlFor="background-color">
                    Color
                </label>
            </div>
            <div className="item">
                <input type="color" name="backgroundColor" id="background-color" value={backgroundColor} onChange={handleChange} />
            </div>
        </div>
    )
}