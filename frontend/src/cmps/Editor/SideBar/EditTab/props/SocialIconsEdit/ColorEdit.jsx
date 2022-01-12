import React from 'react'

export const ColorEdit = ({ props, handleChange }) => {
    return (
        <>
            <div className="social-icons-edit-color flex direction-column" >
                <label htmlFor="color">Icon color:</label>
                <input
                    type="color"
                    id="color"
                    name="color"
                    value={props.color}
                    onChange={handleChange}
                />
            </div>
            <div className="flex direction-column">
                <label htmlFor="backgroundColor">Outline color:</label>
                <input
                    type="color"
                    id="backgroundColor"
                    name="backgroundColor"
                    value={props.backgroundColor}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}