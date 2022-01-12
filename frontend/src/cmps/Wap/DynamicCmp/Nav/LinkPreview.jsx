import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { COMPONENT } from '../../../../js/constants'
import { Actions } from '../../Actions'

export const LinkPreview = ({ id, selected, idx, link, updateCmp, path, color, hoverColor, setScreen }) => {
    const isEditor = useLocation().pathname.includes('editor')

    const [actionsVisible, setActionsVisible] = useState(false)
    const [currColor, setCurrColor] = useState(color ? color : 'black')
    const [isContentEditable, setIsContentEditable] = useState(false)

    useEffect(() => {
        setCurrColor(color)
    }, [color])

    useEffect(() => {
        if (selected && selected.id && selected.id !== id) setIsContentEditable(false)
    }, [selected])

    return (
        <a
            onMouseEnter={() => {
                if (isEditor) setActionsVisible(true)
                setCurrColor(hoverColor ? hoverColor : 'black')
            }}
            onMouseLeave={() => {
                setActionsVisible(false)
                setCurrColor(color ? color : 'black')
            }}
            className={`link${isContentEditable ? " editable" : ""}`}
            contentEditable={isContentEditable}
            onClick={isEditor ? () => { setIsContentEditable(true) } : () => { setScreen(false) }}
            suppressContentEditableWarning={true}
            onBlur={isEditor ? (ev) => {
                setIsContentEditable(false)
                updateCmp(idx, ev.target.innerText)
            } : () => { }}
            style={{ padding: '3px', position: 'relative', color: currColor, margin: 0 }}
            href={isEditor ? null : `#${link.url}`}
        >
            {link.txt}
            {actionsVisible && <Actions path={path} type={COMPONENT} />}
        </a>
    )
}