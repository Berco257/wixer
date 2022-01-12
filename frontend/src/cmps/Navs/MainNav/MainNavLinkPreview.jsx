import React from 'react'
import { NavLink } from 'react-router-dom'

export const MainNavLinkPreview = ({ link, setScreen }) => {
    return (
        <li className="main-nav-link-preview">
            <NavLink
                className="flex align-center"
                to={link.url}
                onClick={() => setScreen(false)}
            >
                {link.title}
            </NavLink>
        </li>
    )
}