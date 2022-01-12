import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Hamb } from '../../../Navs/Hamb'
import { LinkList } from './LinkList'
import { setScreen } from '../../../../store/actions/general.actions'
import { Screen } from '../../../Screen'

export const Nav = ({ style, data, updateCmp, path }) => {
    const [menu, setMenu] = useState(false)
    const screen = useSelector(state => state.generalReducer.screen)

    const dispatch = useDispatch()
    const onSetScreen = (screen) => dispatch(setScreen(screen))
    const toggleMenu = () => {
        setMenu(!menu)
        onSetScreen(!screen)
    }

    if (!screen && menu) setMenu(false)

    return (
        <div className="publish-nav">
            <Screen screen={screen} setScreen={onSetScreen} />
            <nav style={style} className={`nav clear-list links flex${menu ? " active" : ""}`}>
                <LinkList
                    data={data}
                    path={path}
                    updateCmp={updateCmp}
                    style={style}
                    setScreen={onSetScreen}
                />
            </nav>
            <Hamb menu={menu} toggleMenu={toggleMenu} />
        </div>
    )
}