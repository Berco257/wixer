import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const WidthEdit = ({ width = 0, handleChange, min = 0, max = 1500, }) => {

    return (
        <>
            <label htmlFor="width">Width:</label>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={width}
                min={min}
                max={max}
                name="width"
                onChange={handleChange}
                id="width"
            />
        </>
    )
}