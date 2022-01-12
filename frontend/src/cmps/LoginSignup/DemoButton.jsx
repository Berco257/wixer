import React from 'react'
import Button from '@mui/material/Button'

export const DemoButton = ({ loginDemo }) => {
    return (
        <Button
            className="demo-button"
            sx={{ '&:hover': { backgroundColor: '#A45C14' }, backgroundColor: '#D27519', color: '#ffffff', paddingInline: '14px' }}
            onClick={loginDemo}>
            Login as demo user
        </Button>
    )
}