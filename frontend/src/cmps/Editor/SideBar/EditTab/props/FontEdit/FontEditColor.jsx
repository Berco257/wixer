import React, { useEffect, useState } from 'react'

export const FontEditColor = ({ color, handleChange }) => {

    const [currColor, setCurrColor] = useState(color)

    useEffect(() => {
        setCurrColor(color)
    }, [color])

    return (
        <div className="font-color">
            <div className="label">
                <label htmlFor="color">Color:</label>
            </div>
            <div className="input">
                <input type="color" name="color" id="color" value={currColor} onChange={handleChange} />
            </div>
        </div>)
}