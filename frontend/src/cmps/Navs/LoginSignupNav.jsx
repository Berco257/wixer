import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onLogout } from '../../store/actions/user.actions'
import { setLoader } from '../../store/actions/general.actions'

export const LoginSignupNav = ({ setScreen }) => {
    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = async () => {
        setScreen(false)
        dispatch(setLoader(true))
        const res = await dispatch(onLogout())
        if (!res) navigate('/login', { replace: true })
        dispatch(setLoader(false))
    }

    return (
        <ul className="login-signup-nav clear-list flex">
            {!user && (
                <li className="login-signup-links flex direction-column align-center">
                    <Link className="flex align-center" to="/login" onClick={() => setScreen(false)}>Login</Link>
                    <span> / </span>
                    <Link className="flex align-center" to="/signup" onClick={() => setScreen(false)}>Signup</Link>
                </li>
            )}
            {user && (
                <>
                    <li><NavLink className="flex align-center" to="/dashboard" onClick={() => setScreen(false)}>Dashboard</NavLink></li>
                    <li><a className="flex align-center" onClick={logout}>Logout</a></li>
                </>
            )}
        </ul>
    )
}