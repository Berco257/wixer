import React from 'react'
import { homeFeatureService } from '../../services/home-feature.service'
import { HomeFeaturePreview } from './HomeFeaturePreview'

export const HomeFeatureList = () => {
    const features = homeFeatureService.getFeatures()

    return (
        <section className="home-feature-list">
            {features.map(feature => {
                return (
                    <HomeFeaturePreview key={feature.id} feature={feature} />
                )
            })}
        </section>
    )
}