import React from 'react'
import Fade from 'react-reveal/Fade'

export const HomeFeaturePreview = ({ feature }) => {
    const duration = 2000
    const delay = 0

    return (
        <div className="home-feature-preview flex">
            <Fade left duration={duration} delay={delay}>
                <div className="wrapper main-layout flex justify-between align-center">
                    <img src={feature.img} />
                    <div className="content">
                        <h3>
                            {feature.title}
                        </h3>
                        <p className="txt">
                            {feature.txt}
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}