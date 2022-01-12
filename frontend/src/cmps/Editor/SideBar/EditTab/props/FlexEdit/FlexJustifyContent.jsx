import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { MenuItem, Select } from '@mui/material'

export const FlexJustifyContent = ({ justifyContent = '', handleChange }) => {
    return (
        <div className="justify-content-edit">
            <div className="input">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="justify-content">Justify Content</InputLabel>
                        <Select
                            labelId="justify-content"
                            id="justify-content"
                            value={justifyContent}
                            label="Justify Content"
                            name="justifyContent"
                            onChange={handleChange}
                            size="small"
                        >
                            <MenuItem value="center">Center</MenuItem>
                            <MenuItem value="flex-start">Flex start</MenuItem>
                            <MenuItem value="flex-end">Flex end</MenuItem>
                            <MenuItem value="space-between">Space between</MenuItem>
                            <MenuItem value="space-around">Space Around</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}