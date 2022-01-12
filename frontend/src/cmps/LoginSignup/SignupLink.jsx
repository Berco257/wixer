import React from 'react'

export const SignupLink = ({ setMode }) => {
    return (
        <div className="signup-link">
            Don't have a Wixer account?
            {' '}
            <a onClick={() => { setMode('signup') }}>Signup</a>
        </div>
    )
}