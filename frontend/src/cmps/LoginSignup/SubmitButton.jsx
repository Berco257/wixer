import React from 'react'
import Button from '@mui/material/Button'

export const SubmitButton = ({ isSubmitting, mode}) => {
    return (
        <div className="submit-button flex justify-center">
            <Button
                sx={{ paddingBlock: '11.5px', fontSize: ' 1.2rem' }}
                className="action"
                variant={'contained'}
                color={'primary'}
                type="submit"
                disabled={isSubmitting}>
                {mode === 'login' ? 'Login' : 'Signup'}
            </Button>
        </div>)
}
