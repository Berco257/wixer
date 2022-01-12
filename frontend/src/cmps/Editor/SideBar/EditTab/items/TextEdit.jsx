import React from 'react'
import { FontEdit } from '../props/FontEdit/FontEdit'
import { FlexEdit } from '../props/FlexEdit/FlexEdit'
import { RenderProps } from '../props/RenderProps'

export const TextEdit = ({ style, updateCmp }) => {

    let timeout
    const handleChange = ({ target }) => {
        const { name, value } = target
        const newStyle = { ...style, [name]: value }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateCmp('style', newStyle)
        }, 20);
    }

    const propList = [
        {
            name: 'font',
            cmp: <FontEdit style={style} handleChange={handleChange} />
        },
        {
            name: 'flex',
            cmp: <FlexEdit style={style} handleChange={handleChange} />
        }
    ]

    return (
        <div className="text-edit">
            <RenderProps propList={propList} />
        </div>
    )
}