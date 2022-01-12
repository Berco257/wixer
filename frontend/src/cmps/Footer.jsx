import React from 'react'
import { useSelector } from 'react-redux'

export const Footer = () => {
    const footerClass = useSelector(state => state.generalReducer.footer)

    return (
        <footer className={footerClass}>
            All rights reserved © Wixer 2021
        </footer>
    )
}