import React, { useEffect } from 'react'
import { BorderEdit } from '../props/BorderEdit'
import { FlexEdit } from '../props/FlexEdit/FlexEdit'
import { BackgroundEdit } from '../props/BackgroundEdit/BackgroundEdit'
import { RenderProps } from '../props/RenderProps'
import { SizeEdit } from '../props/SizeEdit/SizeEdit'
import { SpaceEdit } from '../props/SpaceEdit/SpaceEdit'

export const ColumnSectionEdit = ({ style, updateCmp }) => {

    let timeout
    const handleChange = ({ target }) => {
        const { name, value } = target
        const newStyle = { ...style }
        newStyle[name] = value
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateCmp('style', newStyle)
        }, 20);
    }

    const propList = [
        {
            name: 'background',
            cmp: <BackgroundEdit style={style} updateCmp={updateCmp} handleChange={handleChange} />
        },
        {
            name: 'size',
            cmp: <SizeEdit updateCmp={updateCmp} handleChange={handleChange} style={style} />
        },
        {
            name: 'flex',
            cmp: <FlexEdit style={style} handleChange={handleChange} />
        },
        {
            name: 'space',
            cmp: <SpaceEdit handleChange={handleChange} style={style} />
        },
        {
            name: 'border',
            cmp: <BorderEdit style={style} handleChange={handleChange} />
        }
    ]

    return (
        <div className="column-section-edit">
            <RenderProps propList={propList} />
        </div>
    )
}