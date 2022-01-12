import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { MenuItem, Select } from '@mui/material'

export const FlexAlignItems = ({ alignItems = '', handleChange}) => {
    return (
        <div className="align-items-edit">
            <div className="input">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="align-items">Align Items</InputLabel>
                        <Select
                            labelId="align-items"
                            id="align-items"
                            value={alignItems}
                            label="Align Items"
                            name="alignItems"
                            onChange={handleChange}
                            size="small"
                        >
                            <MenuItem value="center">Center</MenuItem>
                            <MenuItem value="flex-start">Flex start</MenuItem>
                            <MenuItem value="flex-end">Flex end</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}