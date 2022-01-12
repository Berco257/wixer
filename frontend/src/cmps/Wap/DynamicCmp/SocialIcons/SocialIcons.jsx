import React from 'react'
import { SocialIconsPreview } from './SocialIconsPreview'

export const SocialIcons = ({ data, style }) => {
    const socialList = [
        'facebook',
        'instagram',
        'github',
        'dribbble',
        'linkedin',
        'twitter'
    ]

    return (
        <div className="social-icons flex justify-between" style={style}>
            {socialList.map(social => {
                return (
                    <SocialIconsPreview
                        key={social}
                        data={data}
                        social={social}
                    />
                )
            })}
        </div>
    )
}












