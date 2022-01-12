import React, { useEffect, useState } from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const FontEditSize = ({ fontSize = 16, handleChange }) => {

    return (
        <div className="font-size">
            <label htmlFor="font-size">Font Size:</label>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={fontSize}
                min={5}
                max={100}
                name="fontSize"
                onChange={handleChange}
                id="font-size"
            />
        </div>
    )
}