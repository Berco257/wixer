import React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

export const TemplatePreview = ({ template }) => {
    return (
        <ImageListItem className={`template-preview${template.id ? "" : " plus"}`}>
            <img
                src={`${template.img}${template.id ? "?w=164&h=164&fit=crop&auto=format" : ""}`
                }
                srcSet={`${template.img}${template.id ? "?w=164&h=164&fit=crop&auto=format&dpr=2 2x" : ""}`}
                alt={template.title}
                loading="lazy"
            />
            <div className="cover">
                <div className="actions">
                    {!template.id &&
                        <a className="create" href="/editor">Create new</a>
                    }
                    {template.id &&
                        (<>
                            <a href={`/preview/${template.id}`} target='_blank'>Preview</a>
                            <a href={`/editor/${template.id}`}>Edit</a>
                        </>)
                    }
                </div>
            </div>
            <ImageListItemBar
                className="title"
                title={template.title}
            />
        </ImageListItem >
    )
}