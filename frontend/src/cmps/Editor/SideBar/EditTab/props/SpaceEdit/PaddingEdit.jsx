import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'

export const PaddingEdit = ({ paddingTop = 0, paddingRight = 0, paddingBottom = 0, paddingLeft = 0, handleChange }) => {
    const propList = [
        {
            name: 'top',
            value: paddingTop
        },
        {
            name: 'right',
            value: paddingRight
        },
        {
            name: 'bottom',
            value: paddingBottom
        },
        {
            name: 'left',
            value: paddingLeft
        }
    ]
    
    return (
        <>
            {propList.map(prop => {
                return (
                    <div key={prop.name}>
                        <label htmlFor={`padding-${prop.name}`}>{`Padding-${prop.name}:`}</label>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            value={prop.value}
                            name={`padding${prop.name.charAt(0).toUpperCase() + prop.name.slice(1)}`}
                            onChange={handleChange}
                            id={`padding-${prop.name}`}
                        />
                    </div>
                )
            })}
        </>
    )
}