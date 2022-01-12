import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setScreen } from '../store/actions/general.actions'
import LoaderImg from '../assets/images/loader.svg'

export const Loader = () => {
    const loader = useSelector(state => state.generalReducer.loader)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setScreen(loader))
    }, [loader])

    return (
        <section className={`loader${loader ? " active" : ""}`}>
            <img src={LoaderImg} />
        </section>
    )
}