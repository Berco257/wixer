import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Button = ({ id, selected, style, data, updateCmp }) => {
    const isEditor = useLocation().pathname.includes('editor')

    const [currBgColor, setCurrBgColor] = useState(style.backgroundColor || "ffffff")
    const [isContentEditable, setIsContentEditable] = useState(false)

    useEffect(() => {
        setCurrBgColor(style.backgroundColor || "ffffff")
    }, [style, data])

    useEffect(() => {
        if (selected && selected.id && selected.id !== id) setIsContentEditable(false)
    }, [selected])
    
    const onChange = ({ target }) => {
        updateCmp('data', { ...data, txt: target.innerText })
    }

    return (
        <div
            className={`btn flex${isContentEditable ? " editable" : ""}`}
            onMouseEnter={() => { setCurrBgColor(data.hoverColor) }}
            onMouseLeave={() => { setCurrBgColor(style.backgroundColor) }}
            style={{ ...style, backgroundColor: currBgColor || "ffffff", display: 'inline-block' }}
            contentEditable={isEditor ? isContentEditable : false}
            onClick={isEditor ? () => { setIsContentEditable(true) } : () => { }}
            suppressContentEditableWarning={true}
            onBlur={isEditor ? (ev) => {
                setIsContentEditable(false)
                onChange(ev)
            } : () => { }}
        >
            {data.txt}
        </div>
    )
}