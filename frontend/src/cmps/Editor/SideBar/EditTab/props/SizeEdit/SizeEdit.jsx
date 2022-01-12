import React, { useEffect, useState } from 'react'
import { Switch } from '@mui/material'
import { WidthEdit } from './WidthEdit'
import { HeightEdit } from './HeightEdit'

export const SizeEdit = ({ updateCmp, handleChange, style }) => {
    const [isWidthAuto, setIsWidthAuto] = useState(style.width === 'auto' ? true : false)
    const width = !style.width || style.width.toString().includes('vh') ? 0 :
        (style.width === 'auto' ? style.width : +style.width)

    useEffect(() => {
        setIsWidthAuto(style.width === 'auto' ? true : false)
    }, [style])

    const onAutoWidthChange = ({ target }) => {
        setIsWidthAuto(target.checked)
        const newStyle = { ...style }
        newStyle.width = target.checked ? 'auto' : 400
        updateCmp('style', newStyle)
    }

    return (
        <>
            <label htmlFor="auto-width">Auto width:</label>
            <Switch id="auto-width" checked={isWidthAuto} onChange={onAutoWidthChange} />
            {width !== 'auto' && (
                <WidthEdit width={width} handleChange={handleChange} />
            )}
            <HeightEdit height={style.height} handleChange={handleChange} />
        </>
    )
}