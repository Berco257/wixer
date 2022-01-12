import React from 'react'
import { FontEditColor } from '../FontEdit/FontEditColor'
import { NavEditColorHover } from './NavEditColorHover'

export const NavEditColor = ({ color, hoverColor, handleChange, updateData }) => {
    return (
        <>
            <div className="font-edit">
                <FontEditColor color={color} handleChange={handleChange} />
            </div>
            <NavEditColorHover hoverColor={hoverColor} updateData={updateData} />
        </>
    )
}