import React from 'react'
import { Switch } from '@mui/material'

export const FormEditTheme = ({ handleChange, isDark }) => {
    return (
        <div className="form-edit flex justify-between align-center">
            <label htmlFor="dark-switch">Dark Mode</label>
            <Switch id="dark-switch" checked={isDark} onChange={handleChange} />
        </div>)
}