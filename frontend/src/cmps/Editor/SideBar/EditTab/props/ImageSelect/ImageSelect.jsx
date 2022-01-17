import React from 'react'
import { uploadImg } from '../../../../../../services/cloudinary.service';
import { ImageUpload } from './ImageUpload'
import { ImageSearch } from './ImageSearch'

export const ImageSelect = ({ isBg, style, updateCmp }) => {
    const onUploadImage = (url) => {
        if (isBg) {
            const newStyle = { ...style };
            newStyle['backgroundImage'] = `url(${url})`;
            updateCmp('style', newStyle);
        } else {
            updateCmp('data', { url })
        }
    }

    return (
        <>
            <ImageUpload onUpload={(ev) => uploadImg(ev).then(url => onUploadImage(url))} />
            <ImageSearch onSelect={onUploadImage} />
        </>
    )
}