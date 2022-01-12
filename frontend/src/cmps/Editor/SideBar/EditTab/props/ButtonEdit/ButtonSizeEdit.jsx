import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const ButtonSizeEdit = ({ paddingInline, paddingBlock, handleChange }) => {

    return (
        <div className="size-edit">
            <div className="padding-inline-edit">
                <label htmlFor="paddingInline">Width:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+paddingInline}
                    min={16}
                    max={100}
                    name="paddingInline"
                    onChange={handleChange}
                    id="paddingInline"
                />
            </div>
            <div className="padding-block-edit">
                <label htmlFor="paddingBlock">Height:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+paddingBlock}
                    min={16}
                    max={100}
                    name="paddingBlock"
                    onChange={handleChange}
                    id="paddingBlock"
                />
            </div>
        </div>
    )
}