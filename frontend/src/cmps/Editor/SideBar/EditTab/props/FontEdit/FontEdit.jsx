
import React from 'react'
import { FontEditTextAlign } from './FontEditTextAlign'
import { FontEditSize } from './FontEditSize'
import { FontEditColor } from './FontEditColor'
import { FontEditFamily } from './FontEditFamily'

export const FontEdit = ({ style, handleChange }) => {
    return (
        <div className="font-edit">
            <FontEditSize fontSize={style.fontSize} handleChange={handleChange} />
            <FontEditTextAlign name="textAlign" textAlign={style.textAlign || 'left'} handleChange={handleChange} />
            <FontEditColor color={style.color || '#000000'} handleChange={handleChange} />
            <FontEditFamily fontFamily={style.fontFamily} handleChange={handleChange} />
        </div>
    )
}