import React from 'react'
import { RenderProps } from '../props/RenderProps'
import { SizeEdit } from '../props/SizeEdit/SizeEdit'
import { YouTubeEdit } from '../props/YouTubeEdit'

export const VideoEdit = ({ style, data, updateCmp }) => {
    const onVideoChange = ({ target }) => {
        const { value } = target
        updateCmp('data', { videoId: value })
    }

    let timeout
    const onStyleChange = ({ target }) => {
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
            name: 'youtube',
            cmp: <YouTubeEdit data={data} handleChange={onVideoChange} />
        },
        {
            name: 'size',
            cmp: <SizeEdit updateCmp={updateCmp} handleChange={onStyleChange} style={style} />
        }
    ]

    return (
        <RenderProps propList={propList} />
    )
}