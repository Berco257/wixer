import React from 'react'
import { HomeTop } from '../cmps/Home/HomeTop'
import { HomeFeatureList } from '../cmps/Home/HomeFeatureList'
import { TemplateList } from '../cmps/Templates/TemplateList'
import { TemplatesLink } from '../cmps/Templates/TemplatesLink'
import { useScrollToTop } from '../hooks/useScrollToTop'

export const Home = () => {
    useScrollToTop()

    return (
        <section className="home">
            <HomeTop />
            <HomeFeatureList />
            <TemplateList templatesAmount={6} />
            <TemplatesLink />
        </section>
    )
}