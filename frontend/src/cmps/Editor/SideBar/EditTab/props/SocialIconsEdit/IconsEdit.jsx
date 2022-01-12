import React from 'react'
import { FacebookIcon } from '../../../../../Wap/DynamicCmp/SocialIcons/icons/FacebookIcon'
import { InstagramIcon } from '../../../../../Wap/DynamicCmp/SocialIcons/icons/InstagramIcon'
import { GithubIcon } from '../../../../../Wap/DynamicCmp/SocialIcons/icons/GithubIcon'
import { DribbbleIcon } from '../../../../../Wap/DynamicCmp/SocialIcons/icons/DribbbleIcon'
import { LinkedinIcon } from '../../../../../Wap/DynamicCmp/SocialIcons/icons/LinkedinIcon'
import { TwitterIcon } from '../../../../../Wap/DynamicCmp/SocialIcons/icons/TwitterIcon'

export const IconsEdit = ({ props, handleChange, toggleShown }) => {
    const getProps = (socialName, fillColor) => {
        return {
            isEditComp: true,
            onClick: () => { toggleShown(socialName) },
            fillColor: props.socials[socialName].shown ? fillColor : '#000000'
        }
    }

    const socialList = [
        {
            name: 'facebook',
            icon: <FacebookIcon {...getProps('facebook', '#4267B2')} />
        },
        {
            name: 'instagram',
            icon: <InstagramIcon {...getProps('instagram', '#F77737')} />
        },
        {
            name: 'github',
            icon: <GithubIcon {...getProps('github', '#3b3838')} />
        },
        {
            name: 'dribbble',
            icon: <DribbbleIcon {...getProps('dribbble', '#ea4c89')} />
        },
        {
            name: 'linkedin',
            icon: <LinkedinIcon {...getProps('linkedin', '#0e76a8')} />
        },
        {
            name: 'twitter',
            icon: <TwitterIcon {...getProps('twitter', '#1DA1F2')} />
        },
    ]
    return (
        <div className="social-icons-edit">
            {socialList.map(social => {
                return (
                    <div key={social.name} className="social-container flex">
                        {social.icon}
                        {<input
                            type="text"
                            disabled={!props.socials[social.name].shown}
                            name={social.name}
                            placeholder={`${social.name.charAt(0).toUpperCase() + social.name.slice(1)} link...`}
                            value={(props.socials[social.name].url) ? props.socials[social.name].url : ''}
                            onChange={handleChange}
                        />}
                    </div>
                )
            })}
        </div>
    )
}