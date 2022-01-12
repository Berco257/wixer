import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { ImagePreview } from './ImagePreview'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export const CarouselBody = ({ theme, activeStep, handleStepChange, images }) => {
    return (
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {images.map((step, index) => (
                <div key={step.id}>
                    <ImagePreview
                        index={index}
                        activeStep={activeStep}
                        step={step} />
                </div>
            ))}
        </AutoPlaySwipeableViews>
    )
}