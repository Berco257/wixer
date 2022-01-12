import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMsg } from '../store/actions/general.actions'
import CloseImg from '../assets/images/close.png'

export const AppMsg = () => {
    const msg = useSelector(state => state.generalReducer.msg)
    const dispatch = useDispatch()
    const onClose = () => dispatch(setMsg(''))

    return (
        <section className={`app-msg flex align-center${msg ? ` active ${msg.type}` : ""}`}>
            <div className="msg">{msg.txt}</div>
            <div className="close" onClick={onClose}>
                <img src={CloseImg} />
            </div>
        </section>
    )
}