import React from 'react'
import { MainNavLinkPreview } from './MainNavLinkPreview'

export const MainNavLinkList = ({ setScreen }) => {
    const links = [
        { title: "Home", url: "/" },
        { title: "Editor", url: "/editor" },
        { title: "Templates", url: "/templates" },
    ]

    return (
        <ul className="main-nav-link-list clear-list flex">
            {links.map((link, idx) => {
                return (
                    <MainNavLinkPreview key={idx} link={link} setScreen={setScreen} />
                )
            })}
        </ul>
    )
}