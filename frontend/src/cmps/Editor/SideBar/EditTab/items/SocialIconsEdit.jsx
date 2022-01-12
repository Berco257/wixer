import React, { useState } from 'react'
import { RenderProps } from '../props/RenderProps'
import { ColorEdit } from '../props/SocialIconsEdit/ColorEdit'
import { IconsEdit } from '../props/SocialIconsEdit/IconsEdit'


export const SocialIconsEdit = ({ data, updateCmp }) => {
    const [props, setProps] = useState({ ...data })

    let timeout
    const handleChange = ({ target }) => {
        const newProps = { ...data }
        if (newProps.socials[target.name]) newProps.socials[target.name].url = target.value
        else newProps[target.name] = target.value
        setProps(newProps)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateCmp('data', newProps)
        }, 20);
    }

    const toggleShown = (socialName) => {
        const newSocials = { ...props.socials }
        newSocials[socialName].shown = !newSocials[socialName].shown
        setProps({ ...props, socials: newSocials })
        updateCmp('data', props)
    }

    const propList = [
        {
            name: 'social-links',
            cmp: <IconsEdit props={props} handleChange={handleChange} toggleShown={toggleShown} />
        },
        {
            name: 'colors',
            cmp: <ColorEdit props={props} handleChange={handleChange} />
        }
    ]

    return (
        <div className=" flex direction-column">
            <RenderProps propList={propList} />
        </div>
    )

}

