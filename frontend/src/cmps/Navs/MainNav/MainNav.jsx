import React from 'react'
import { LoginSignupNav } from '../LoginSignupNav'
import { MainNavLinkList } from './MainNavLinkList'

export const MainNav = ({ menu, setScreen }) => {
    return (
        <nav className={`main-nav flex${menu ? " active" : ""}`}>
            <MainNavLinkList setScreen={setScreen} />
            <LoginSignupNav setScreen={setScreen} />
        </nav>
    )
}