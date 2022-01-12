import React from 'react'
import TextField from '@mui/material/TextField'

export const TextFieldOutlined = (props) => {
    return (
        <TextField {...props} varient={"outlined"} color={"primary"} />
    )
}