import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export const TemplatesLink = () => {
    return (
        <div className="templates-link main-layout">
            <Link className="flex align-center" to="/templates">
                See all website templates
                <ArrowRightIcon />
            </Link>
        </div>
    )
}