import React from 'react'
import { TemplateList } from '../cmps/Templates/TemplateList'
import { useScrollToTop } from '../hooks/useScrollToTop'

export const Templates = () => {
    useScrollToTop()

    return (
        <section className="templates">
            <TemplateList />
        </section>
    )
}