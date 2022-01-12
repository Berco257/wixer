import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Screen } from '../cmps/Screen'
import { Logo } from './Logo'
import { MainNav } from './Navs/MainNav/MainNav'
import { Hamb } from './Navs/Hamb'
import { setScreen } from '../store/actions/general.actions'

export const Header = () => {
    const [menu, setMenu] = useState(false)
    const screen = useSelector(state => state.generalReducer.screen)
    const headerClass = useSelector(state => state.generalReducer.header)

    const dispatch = useDispatch()
    const onSetScreen = (screen) => dispatch(setScreen(screen))
    const toggleMenu = () => {
        setMenu(!menu)
        onSetScreen(!screen)
    }

    if (!screen && menu) setMenu(false)

    return (
        <header className={`${headerClass}`}>
            <div className="wrapper main-layout flex justify-between align-center">
                <Screen screen={screen} setScreen={onSetScreen} />
                <Logo />
                <MainNav menu={menu} setScreen={onSetScreen} />
                <Hamb menu={menu} toggleMenu={toggleMenu} />
            </div>
        </header>
    )
}