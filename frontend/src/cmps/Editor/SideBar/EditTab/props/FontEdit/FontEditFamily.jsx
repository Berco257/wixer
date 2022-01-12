import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { MenuItem, Select } from "@mui/material"

export const FontEditFamily = ({ fontFamily = 'Arial', handleChange }) => {
    return (
        <div className="font-family">
            <div className="input">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="font-family">Family</InputLabel>
                        <Select
                            labelId="font-family"
                            id="font-family"
                            value={fontFamily}
                            label="Family"
                            name="fontFamily"
                            onChange={handleChange}
                            size="small"
                        >
                            <MenuItem value="Arial">Arial</MenuItem>
                            <MenuItem value="caveat">Caveat</MenuItem>
                            <MenuItem value="montserrat">Montserrat</MenuItem>
                            <MenuItem value="forum">Forum</MenuItem>
                            <MenuItem value="roboto">Roboto</MenuItem>
                            <MenuItem value="raleway">Raleway</MenuItem>
                            <MenuItem value="raleway-semi-bold">Raleway Semi Bold</MenuItem>
                            <MenuItem value="courgette">Courgette</MenuItem>
                            <MenuItem value="lobster">Lobster</MenuItem>
                            <MenuItem value="poppins">Poppins</MenuItem>
                            <MenuItem value="opensans">Open Sans</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}