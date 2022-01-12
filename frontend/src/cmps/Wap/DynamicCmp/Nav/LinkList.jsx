import React from 'react'
import { LinkPreview } from './LinkPreview'

export const LinkList = ({ data, path, updateCmp, style, setScreen }) => {
    return (
        <>
            {data.links.map((link, idx) => {
                return (
                    <LinkPreview
                        key={`${path}-${idx}`}
                        link={link}
                        idx={idx}
                        updateCmp={updateCmp}
                        path={`${path}-${idx}`}
                        color={style.color}
                        hoverColor={data.hoverColor}
                        setScreen={setScreen}
                    />
                )
            })}
        </>
    )
}