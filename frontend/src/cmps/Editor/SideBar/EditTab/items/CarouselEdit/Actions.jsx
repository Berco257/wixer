import React from 'react'
import { ChangeImage } from './ChangeImage'
import { DeleteImage } from './DeleteImage'

export const Actions = ({ image, idx, uploadImg, onUploadImage, onRemove }) => {
    return (
        <div className="actions">
            <ChangeImage
                image={image}
                idx={idx}
                uploadImg={uploadImg}
                onUploadImage={onUploadImage}
            />
            <DeleteImage
                idx={idx}
                onRemove={onRemove}
            />
        </div>
    )
}