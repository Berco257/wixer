import React, { useState, useEffect } from 'react'

export const FacebookIcon = ({ fillColor, onClick, isEditComp }) => {
    const [color, setColor] = useState(fillColor)

    useEffect(() => {
        setColor(fillColor)
    }, [fillColor])

    const changeColor = clr => {
        if (isEditComp) return
        setColor(clr)
    }

    return (
        <svg
            onMouseEnter={() => { changeColor('#4267B2') }}
            onMouseLeave={() => { changeColor(fillColor) }}
            onClick={onClick}
            className={(isEditComp) ? "edit-facebook-icon" : "facebook-icon"}
            height="40px"
            width="40px"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512">
            <path
                fill={color}
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">

            </path>
        </svg>
    )
}