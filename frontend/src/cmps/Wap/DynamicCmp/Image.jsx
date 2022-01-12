import React, { useEffect, useState } from 'react'
import { LoaderSmall } from '../../../assets/images/LoaderSmall'

export const Image = ({ data, style }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
    }, [data.url])

    return (
        <>
            {isLoading && <LoaderSmall />}
            <img
                src={data.url}
                onLoad={() => { setIsLoading(false) }} alt={data.alt || ""}
                style={{ ...style, display: (isLoading) ? 'none' : 'unset' }}
            />
        </>
    )
}