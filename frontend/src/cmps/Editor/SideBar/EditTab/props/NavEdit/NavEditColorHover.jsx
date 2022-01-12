import React from 'react'

export const NavEditColorHover = ({ hoverColor, updateData }) => {
    return (
        <div className="hoverColor">
            <div className="label">
                <label htmlFor="hoverColor">Hover Color:</label>
            </div>
            <div className="input">
                <input
                    type="color"
                    name="hoverColor"
                    id="hoverColor"
                    value={hoverColor}
                    onChange={updateData}
                />
            </div>
        </div>
    )
}