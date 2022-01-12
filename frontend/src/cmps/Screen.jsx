import React from 'react'
import { useSelector } from 'react-redux'

export const Screen = ({ screen, setScreen }) => {
    const loader = useSelector(state => state.generalReducer.loader)
    const onSetScreen = () => {
        if (!loader) setScreen(false)
    }

    return (
        <section className={`screen${screen ? " active" : ""}`} onClick={onSetScreen}>
        </section>
    )
}