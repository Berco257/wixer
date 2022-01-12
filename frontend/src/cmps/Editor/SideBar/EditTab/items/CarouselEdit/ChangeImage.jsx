import React from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'

export const ChangeImage = ({ image, idx, uploadImg, onUploadImage }) => {
    return (
        <div className="change-image">
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id={`raised-button-file${image.id}`}
                type="file"
                onChange={(ev) => uploadImg(ev).then(url => onUploadImage(url, idx))}
            />
            <label htmlFor={`raised-button-file${image.id}`}>
                <div className="button" title="change image">
                    <InsertPhotoIcon />
                </div>
            </label>
        </div>
    )
}