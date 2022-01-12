import React from 'react'
import { FontEdit } from '../props/FontEdit/FontEdit'
import { ButtonSizeEdit } from '../props/ButtonEdit/ButtonSizeEdit'
import { FlexEdit } from '../props/FlexEdit/FlexEdit'
import { RenderProps } from '../props/RenderProps'
import { ButtonColorEdit } from '../props/ButtonEdit/ButtonColorEdit'

export const ButtonEdit = ({ style, updateCmp, data }) => {

    let timeout
    const handleChange = ({ target }) => {
        const { name, value } = target
        const newStyle = { ...style, [name]: value }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateCmp('style', newStyle)
        }, 10)
    }

    let hoverTimeout
    const handleHoverChange = ({ target }) => {
        const { name, value } = target
        const newStyle = { ...data, [name]: value }
        clearTimeout(hoverTimeout)
        hoverTimeout = setTimeout(() => {
            updateCmp('data', newStyle)
        }, 10)

    }

    const propList = [
        {
            name: 'font',
            cmp: <FontEdit style={style} handleChange={handleChange} />
        },
        {
            name: 'color',
            cmp: <ButtonColorEdit bgColor={style.backgroundColor} hoverColor={data.hoverColor} handleChange={handleChange} handleHoverChange={handleHoverChange} />
        },
        {
            name: 'size',
            cmp: <ButtonSizeEdit paddingInline={style.paddingInline} paddingBlock={style.paddingBlock} handleChange={handleChange} />
        },
        {
            name: 'flex',
            cmp: <FlexEdit style={style} handleChange={handleChange} />
        }
    ]

    return (
        <div className="button-edit">
            <RenderProps propList={propList} />
        </div>
    )
}