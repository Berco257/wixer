import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Editor } from '../cmps/Editor/Editor'
import { Mobile } from '../cmps/Editor/Mobile'

export const EditorPage = () => {
    const matches = useMediaQuery('(min-width:720px)')

    return (
        <section className="editor-page">
            {matches && <Editor />}
            {!matches && <Mobile />}
        </section>
    )
}