import React from 'react'
import { Button } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

export const ImageUpload = ({ onUpload }) => {
    return (
        <div className="image-upload">
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onFocus={() => { onUpload('') }}
                onChange={(ev) => onUpload(ev)}
            />
            <label htmlFor="raised-button-file">
                <Button
                    className="button"
                    variant="outlined"
                    size="small"
                    startIcon={<PhotoCameraIcon />}
                    component="span"
                    color="primary"
                >
                    UPLOAD IMAGE
                </Button>
            </label>
        </div>
    )
}