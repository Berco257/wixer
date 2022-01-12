import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginSignup } from '../cmps/LoginSignup/LoginSignup'
import { useScrollToTop } from '../hooks/useScrollToTop'

export const LoginSignupPage = () => {
    useScrollToTop()

    const user = useSelector(state => state.userReducer.user)
    const path = useLocation().pathname.slice(1)
    const navigate = useNavigate()
    const setUrl = (path) => navigate(`/${path}`, { replace: true })

    useEffect(() => {
        if (user) navigate('/dashboard', { replace: true })
    }, [user])

    return (
        <section className="login-signup-page main-layout">
            <LoginSignup mode={path} setMode={setUrl} />
        </section>
    )
}