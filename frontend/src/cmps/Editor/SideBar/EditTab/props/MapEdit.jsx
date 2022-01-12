import React from 'react'
import { TextField } from '@mui/material'

export const MapEdit = ({ data, handleChange }) => {
    return (
        <>
            <div className="field">
                <TextField type="text" label="Location" name="location" variant="outlined" defaultValue={data.location} onChange={handleChange} />
            </div>
            <div className="field">
                <TextField id="marker-name" label="Marker name" variant="outlined" name="markerName" fullWidth defaultValue={data.markerName} onChange={handleChange} />
            </div>
        </>
    )
}