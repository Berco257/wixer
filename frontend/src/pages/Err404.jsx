import React from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'

export const Err404 = () => {
    useScrollToTop()

    return (
        <section className="err404 main-layout">
            <p>Oops... this page cannot be found.</p>
        </section>
    )
}