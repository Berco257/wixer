import React from 'react'
import { PrettoSlider } from '../../../../../Mui/PrettoSlider'
import { FlexGap } from '../FlexEdit/FlexGap'
import { FontEditFamily } from '../FontEdit/FontEditFamily'
import { FontEditSize } from '../FontEdit/FontEditSize'

export const NavEditFont = ({ fontSize = 16, fontFamily = 'arial', handleChange, }) => {
    return (
        <>
            <FontEditSize fontSize={fontSize} handleChange={handleChange} />
            <FontEditFamily fontFamily={fontFamily} handleChange={handleChange} />
        </>
    )
}