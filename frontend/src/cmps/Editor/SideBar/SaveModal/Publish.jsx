import React from 'react'
import Button from '@mui/material/Button'
import { TextFieldOutlined } from '../../../Mui/TextFieldOutlined'
import { LoaderSmall } from '../../../../assets/images/LoaderSmall'
import { wapService } from '../../../../services/waps.service'

export const Publish = ({ setLoading, loading, setIsNameAvailable, isNameAvailable,
    onSave, setIsModalOpen, siteName, setSiteName }) => {

    const onSubmit = async ev => {
        ev.preventDefault()
        setLoading(true)
        try {
            const wap = await wapService.getByName(siteName)
            setLoading(false)
            setIsNameAvailable(false)
        } catch (err) {
            setLoading(true)
            await onSave(siteName)
            setLoading(false)
            setIsNameAvailable(true)
            setIsModalOpen(true)
        }
    }

    return (
        <form className="site-name-modal flex direction-column" onSubmit={onSubmit}>
            <h2>Site name:</h2>
            <p>Pick a creative and unique name for your site</p>
            <TextFieldOutlined
                autoFocus
                margin="dense"
                label="Site Name"
                type="text"
                fullWidth
                variant="standard"
                value={siteName}
                onChange={({ target }) => { setSiteName(target.value) }}
            />
            <Button
                sx={{ fontSize: '1.2rem' }}
                className="action"
                variant={'contained'}
                color={'primary'}
                type="submit"
                disabled={loading}
                fullWidth={true}
            >
                {loading ? <LoaderSmall width="12" color="#f5f5f5" height='33' /> : 'Save'}
            </Button>
            <p style={{ opacity: (isNameAvailable) ? 0 : 1, color: 'red', position: 'absolute', bottom: '80px', fontSize: '14px' }}>*Name is taken</p>
        </form>)
}