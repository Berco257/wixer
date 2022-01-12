import React from 'react'

export const Hamb = ({ menu, toggleMenu }) => {
    return (
        <div className={`hamb${menu ? " active" : ""}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}