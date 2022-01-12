import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const FlexGap = ({ gap, handleChange }) => {
    return (
        <>
            {gap && (
                <div className="space-between-edit">
                    <label htmlFor="gap">Space Between:</label>
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        value={+gap}
                        min={16}
                        max={100}
                        name="gap"
                        onChange={handleChange}
                        id="gap"
                    />
                </div>
            )}
        </>
    )
}