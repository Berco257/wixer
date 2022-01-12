import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { CarouselHead } from './CarouselHead'
import { CarouselBody } from './CarouselBody'
import { CarouselNav } from './CarouselNav'


export const Carousel = ({ data, style, }) => {
  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()
  const { images } = data
  const maxSteps = images.length

  useEffect(() => {
    setActiveStep(0)
  }, [data])

  const handleNext = () => {
    if(activeStep === maxSteps - 1) setActiveStep(0)
    else setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    if(activeStep === 0 ) setActiveStep(maxSteps - 1)
    else setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  if (!images.length) return (
    <div className="carousel" style={style}>
      <div className="empty-carousel">Carousel</div>
    </div>
  )

  return (
    <div className="carousel" style={style}>
      <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
        <CarouselHead
          images={images}
          activeStep={activeStep}
        />
        <CarouselBody
          theme={theme}
          activeStep={activeStep}
          handleStepChange={handleStepChange}
          images={images}
        />
        <CarouselNav
          maxSteps={maxSteps}
          activeStep={activeStep}
          handleNext={handleNext}
          theme={theme}
          handleBack={handleBack}
        />
      </Box>
    </div>
  )
}