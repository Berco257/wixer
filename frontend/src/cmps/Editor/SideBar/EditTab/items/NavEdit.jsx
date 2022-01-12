import React from 'react'
import { FlexEdit } from '../props/FlexEdit/FlexEdit'
import { NavEditColor } from '../props/NavEdit/NavEditColor'
import { NavEditFont } from '../props/NavEdit/NavEditFont'
import { NavEditLink } from '../props/NavEdit/NavEditLink'
import { RenderProps } from '../props/RenderProps'

export const NavEdit = ({ style, updateCmp, data }) => {
    let timeout
    const handleChange = ({ target }) => {
        const { name, value } = target
        const newStyle = { ...style, [name]: value }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateCmp('style', newStyle)
        }, 20);
    }

    let dataTimeout
    const updateData = ({ target }, linkTxt) => {
        let newData
        if (!linkTxt) newData = { ...data, hoverColor: target.value }
        else {
            newData = { ...data }
            const currIdx = newData.links.findIndex(link => link.txt === linkTxt)
            newData.links[currIdx].url = target.value
        }
        clearTimeout(dataTimeout)
        dataTimeout = setTimeout(() => {
            updateCmp('data', newData)
        }, 20);
    }

    const propList = [
        {
            name: 'links',
            cmp: <NavEditLink links={data.links} updateData={updateData} />
        },
        {
            name: 'font',
            cmp: <NavEditFont fontSize={style.fontSize} fontFamily={style.fontFamily} handleChange={handleChange} />
        },
        {
            name: 'color',
            cmp: <NavEditColor color={style.color} hoverColor={data.hoverColor} handleChange={handleChange} updateData={updateData} />
        },
        {
            name: 'flex',
            cmp: <FlexEdit style={style} handleChange={handleChange} />
        }
    ]

    return (
        <div className="nav-edit">
            <RenderProps propList={propList} />
        </div>
    )
}