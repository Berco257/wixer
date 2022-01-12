import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const MarginEdit = ({ marginTop = 0, marginRight = 0, marginBottom = 0, marginLeft = 0, handleChange }) => {
    const propList = [
        {
            name: 'top',
            value: marginTop
        },
        {
            name: 'right',
            value: marginRight
        },
        {
            name: 'bottom',
            value: marginBottom
        },
        {
            name: 'left',
            value: marginLeft
        }
    ]

    return (
        <>
            {propList.map(prop => {
                return (
                    <div key={prop.name}>
                        <label htmlFor={`margin-${prop.name}`}>{`Margin-${prop.name}:`}</label>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            value={prop.value}
                            name={`margin${prop.name.charAt(0).toUpperCase() + prop.name.slice(1)}`}
                            onChange={handleChange}
                            id={`margin-${prop.name}`}
                        />
                    </div>
                )
            })}
        </>
    )
}