import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const FlexGrow = ({ flexGrow, handleChange }) => {
    return (
        <>
            {flexGrow && (
                <div className="space-between-edit">
                    <label htmlFor="flexGrow">Flex Grow:</label>
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        value={+flexGrow}
                        min={16}
                        max={100}
                        name="flexGrow"
                        onChange={handleChange}
                        id="flexGrow"
                    />
                </div>
            )}
        </>
    )
}