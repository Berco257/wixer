import React from 'react'
import { MarginEdit } from './MarginEdit'
import { PaddingEdit } from './PaddingEdit'

export const SpaceEdit = ({ handleChange, style }) => {
    return (
        <>
            <PaddingEdit
                paddingTop={style.paddingTop}
                paddingRight={style.paddingRight}
                paddingBottom={style.paddingBottom}
                paddingLeft={style.paddingLeft}
                handleChange={handleChange} />
            <MarginEdit
                marginTop={style.marginTop}
                marginRight={style.marginRight}
                marginBottom={style.marginBottom}
                marginLeft={style.marginLeft}
                handleChange={handleChange} />
        </>
    )
}