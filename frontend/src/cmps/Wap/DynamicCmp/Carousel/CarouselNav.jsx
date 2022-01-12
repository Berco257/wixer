import React from 'react'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

export const CarouselNav = ({ maxSteps, activeStep, handleNext, theme, handleBack }) => {
    return (
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
                <Button size="small" onClick={handleNext}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
            }
        />
    )
}