import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { removeItem, duplicateItem, setSelected } from '../../store/actions/wap.actions'

export const Actions = ({ path, type }) => {
    const isEditor = useLocation().pathname.includes('editor')

    const dispatch = useDispatch()

    const onRemove = (ev) => {
        ev.stopPropagation()
        dispatch(setSelected(null))
        dispatch(removeItem(path.split('-'), type))

    }

    const onDuplicate = (ev) => {
        ev.stopPropagation()
        dispatch(duplicateItem(path.split('-'), type))
    }

    return (
        <div className="actions" style={{ color: 'black', zIndex: path.length, fontSize: '16px' }} contentEditable={false}>
            <i className="far fa-clone" onClick={isEditor ? onDuplicate : () => { }}></i>
            <i className="fas fa-trash-alt" onClick={isEditor ? onRemove : () => { }}></i>
        </div>
    )
}