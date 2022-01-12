import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const HeightEdit = ({ height = 0, handleChange, min = 0, max = 1500 }) => {

    return (
        <>
            <label htmlFor="height">Height:</label>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={+height}
                min={min}
                max={max}
                name="height"
                onChange={handleChange}
                id="height"
            />
        </>
    )
}