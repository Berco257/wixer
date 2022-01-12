import React, { useEffect, useState } from 'react'

export const ButtonColorEdit = ({ bgColor, hoverColor, handleChange, handleHoverChange }) => {
    const [currBgColor, setCurrBgColor] = useState(bgColor)
    const [currHoverColor, setCurrHoverColor] = useState(hoverColor)
    
    useEffect(() => {
        setCurrBgColor(bgColor)
    }, [bgColor])

    useEffect(() => {
        setCurrHoverColor(hoverColor)
    }, [hoverColor])

    return (
        <>
            <div className="flex justify-between">
                <label htmlFor="backgroundColor">Background</label>
                <input type="color" name="backgroundColor" id="backgroundColor" value={currBgColor} onChange={handleChange} />
            </div>
            <div className="flex justify-between">
                <label htmlFor="hoverColor">Hover</label>
                <input type="color" name="hoverColor" id="hoverColor" value={currHoverColor} onChange={handleHoverChange} />
            </div>
        </>
    )
}