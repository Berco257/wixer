
import React from 'react'
import { ImageSelect } from '../props/ImageSelect/ImageSelect'
import { RenderProps } from '../props/RenderProps'
import { SizeEdit } from '../props/SizeEdit/SizeEdit'
import { SpaceEdit } from '../props/SpaceEdit/SpaceEdit'

export const ImageEdit = ({ style, updateCmp }) => {
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
            name: 'image',
            cmp: <ImageSelect updateCmp={updateCmp} />
        },
        {
            name: 'size',
            cmp: <SizeEdit updateCmp={updateCmp} handleChange={handleChange} style={style} />
        },
        {
            name: 'space',
            cmp: <SpaceEdit handleChange={handleChange} style={style} />
        }
    ]

    return (
        <div className="image-edit">
            <RenderProps propList={propList} />
        </div>
    )
}