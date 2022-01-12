import React, { useCallback, useState } from 'react'
import { TextField } from '@mui/material'
import debounce from 'lodash.debounce'
import { imageSearchService } from '../../../../../../services/image-search.service'


export const ImageSearch = ({ onSelect }) => {
    const [images, setImages] = useState([])

    const onImageSearch = async ({ target }) => {
        if (!target.value) return
        const res = await imageSearchService.query(target.value)
        setImages(res.value)
    }

    const debouncedChangeHandler = useCallback(
        debounce(onImageSearch, 300)
        , [])

    return (
        <div className="image-search">
            <TextField type="text" label="Search images" name="image" variant="outlined" onChange={debouncedChangeHandler} />
            <ul>
                {images.map(image => (
                    <li key={`${image.thumbnailUrl}`}>
                        <img src={image.thumbnailUrl} alt="" onClick={() => { onSelect(image.contentUrl) }} />
                    </li>
                ))}
            </ul>
        </div>
    )
}