import React from 'react'

export const LoginLink = ({ setMode }) => {
    return (
        <div className="login-link">
            Already have an account?
            {' '}
            <a onClick={() => { setMode('login') }}>Login</a>
        </div>
    )
}