import React, { useEffect, useState } from 'react'
import { Switch } from '@mui/material'
import { FlexAlignItems } from './FlexAlignItems'
import { FlexJustifyContent } from './FlexJustifyContent'
import { FlexGap } from './FlexGap'
import { FlexGrow } from './FlexGrow'


export const FlexEdit = ({ style, handleChange }) => {
    const [isFlex, setIsFlex] = useState(style.display === 'flex' ? true : false)

    useEffect(() => {
        setIsFlex(style.display === 'flex' ? true : false)
    }, [style])

    const setFlex = ({ target }) => {
        setIsFlex(target.checked)
        handleChange({ target: { name: 'display', value: (target.checked) ? 'flex' : 'unset' } })
    }

    return (
        <div className="flex-edit flex direction-column">
            <div >
                <label htmlFor="flex-toggle">Flex Enabled</label>
                <Switch id="flex-toggle" checked={isFlex} onChange={setFlex} />
            </div>
            <FlexAlignItems alignItems={style.alignItems} handleChange={handleChange} />
            <FlexJustifyContent justifyContent={style.justifyContent} handleChange={handleChange} />
            <FlexGap gap={style.gap} handleChange={handleChange} />
            <FlexGrow flexGrow={style.flexGrow} handleChange={handleChange} />
        </div>
    )
}