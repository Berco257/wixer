import React from 'react'
import { ImageSelect } from '../ImageSelect/ImageSelect';
import { BackgroundColorEdit } from './BackgroundColorEdit';

export const BackgroundEdit = ({ style, updateCmp, handleChange }) => {

    return (
        <>
            <BackgroundColorEdit backgroundColor={style.backgroundColor} handleChange={handleChange} />
            <ImageSelect isBg style={style} updateCmp={updateCmp} />
        </>
    )
}