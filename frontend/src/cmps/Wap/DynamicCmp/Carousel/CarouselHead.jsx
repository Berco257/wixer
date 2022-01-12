import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export const CarouselHead = ({ images, activeStep }) => {
    return (
        <Paper
            square
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                paddingBlockEnd: 1,
                pl: 2,
                bgcolor: 'background.default',
            }}
        >
            {images[activeStep] && (
                <Typography>{images[activeStep].label}</Typography>
            )}
        </Paper>
    )
}