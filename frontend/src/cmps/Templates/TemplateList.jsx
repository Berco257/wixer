import React from 'react'
import ImageList from '@mui/material/ImageList'
import { templateService } from '../../services/template.service'
import { TemplatePreview } from './TemplatePreview'

export const TemplateList = ({ templatesAmount }) => {
    const templates = templateService.getAmountOfTemplates(templatesAmount)

    return (
        <section id="templates" className="template-list main-layout">
            <h2>Pick the website template you love and customize it</h2>
            <ImageList>
                {templates.map(template => {
                    return (
                        <TemplatePreview key={template.id} template={template} />
                    )
                })}
            </ImageList>

        </section>
    )
}