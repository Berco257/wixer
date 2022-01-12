import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Text = ({ id, selected, data, style, updateCmp }) => {
    const isEditor = useLocation().pathname.includes('editor')

    const [isContentEditable, setIsContentEditable] = useState(false)
    const onChange = ({ target }) => {
        updateCmp('data', { txt: target.innerText })
    }

    useEffect(() => {
        if (selected && selected.id && selected.id !== id) setIsContentEditable(false)
    }, [selected])

    return (
        <div
            className={`text${(style.fontSize && +(style.fontSize.slice(0, style.fontSize.length - 2)) >= 45) ? ' big' : ''}${isContentEditable ? " editable" : ""}`}
            contentEditable={isContentEditable}
            onClick={isEditor ? () => { setIsContentEditable(true) } : () => { }}
            suppressContentEditableWarning={true}
            onBlur={isEditor ? (ev) => {
                setIsContentEditable(false)
                onChange(ev)
            } : () => { }}
            style={style}
        >
            {data.txt}
        </div>
    )
}