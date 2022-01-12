import React, { useEffect, useState } from 'react'
import { LoaderSmall } from '../../../../../../assets/images/LoaderSmall'

export const Image = ({ image }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
    }, [image.imgPath])

    return (
        <div className="image">
            {isLoading && <LoaderSmall />}
            <img className={`${isLoading ? 'display-none' : ''}`} src={image.imgPath} alt={image.label} onLoad={() => { setIsLoading(false) }} />
        </div>
    )
}