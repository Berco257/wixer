import React from 'react'
import { PrettoSlider } from '../../../../Mui/PrettoSlider'

export const BorderEdit = ({ style, handleChange }) => {
    const { borderWidth, borderColor } = style

    return (
        <>
            {borderWidth}
            <div>
                <label htmlFor="border-size">Border size</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={borderWidth || 0}
                    name='borderWidth'
                    id="border-width"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="border-color">Border color</label>
                <input type="color" name="borderColor" id="border-color" value={borderColor || '#000000'} onChange={handleChange} />
            </div>
        </>
    )
}