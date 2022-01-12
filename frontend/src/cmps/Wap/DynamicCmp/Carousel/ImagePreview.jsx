import React from 'react'
import Box from '@mui/material/Box'

export const ImagePreview = ({ index, activeStep, step }) => {
    return (
        <>
            {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                        height: 300,
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                />
            ) : null}
        </>
    )
}