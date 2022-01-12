import React from 'react'
import { FacebookIcon } from './icons/FacebookIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import { GithubIcon } from './icons/GithubIcon'
import { DribbbleIcon } from './icons/DribbbleIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { TwitterIcon } from './icons/TwitterIcon'

export const SocialIconsPreview = ({ data, social }) => {
    const getStyle = () => {
        return {
            backgroundColor: data.backgroundColor,
            height: '60px',
            width: '60px',
            padding: '10px',
            borderRadius: '50%'
        }
    }

    const getIcon = () => {
        switch (social) {
            case 'facebook': return <FacebookIcon fillColor={data.color} />
            case 'instagram': return <InstagramIcon fillColor={data.color} />
            case 'github': return <GithubIcon fillColor={data.color} />
            case 'dribbble': return <DribbbleIcon fillColor={data.color} />
            case 'linkedin': return <LinkedinIcon fillColor={data.color} />
            case 'twitter': return <TwitterIcon fillColor={data.color} />
            default: return <></>
        }
    }

    return (
        <>
            {data.socials[social].shown && (
                <div style={{ ...getStyle() }}>
                    {getIcon()}
                </div>
            )}
        </>
    )
}