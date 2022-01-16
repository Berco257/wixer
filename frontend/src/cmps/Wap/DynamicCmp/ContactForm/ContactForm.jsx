import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Button } from '@mui/material'
import { StyledTextField } from '../../../Mui/StyledTextField'
import { StyledTextFieldDark } from '../../../Mui/StyledTextFieldDark'
import { MsgSent } from './MsgSent'
import { ContactFormInputList } from './ContactFormInputList'
import { socketService } from '../../../../services/socket.service'
import { utilService } from '../../../../services/util.service'

export const ContactForm = ({ data }) => {
    const wapId = useSelector(state => state.wapReducer._id)
    const ownerId = useSelector(state => state.wapReducer.owner)
    const { wapName } = useParams()
    const [form, setForm] = useState({ ...data.form })
    const [isOpen, setIsOpen] = useState(false)
    const StyledInput = data.isDark ? StyledTextFieldDark : StyledTextField

    useEffect(() => {
        socketService.emit('owner room', ownerId)
    }, [])

    const handleChange = ({ target }) => {
        const { name, value } = target
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        if (!form.msg || !form.subject || !form.name || !form.phone || !form.email || !wapName) return
        socketService.emit('new lead', {wapId, lead: { ...form, id: utilService.makeId(), date: Date.now(), isDone: false }})

        setIsOpen(true)
        setForm({ ...data.form })
    }

    return (
        <form onSubmit={onSubmit} className="contact-form flex direction-column">
            <ContactFormInputList
                StyledInput={StyledInput}
                handleChange={handleChange}
                form={form}
            />
            <Button
                type="submit"
                onClick={onSubmit}
                sx={{ '&:hover': { backgroundColor: (data.isDark) ? '#2b2b2b' : '#ababab' }, backgroundColor: (data.isDark) ? '#3E3E3E' : '#F5F5F5', color: (data.isDark) ? '#F5F5F5' : '#3E3E3E' }} >
                Contact Us
            </Button>
            <MsgSent
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                backgroundColor={(data.isDark) ? '#3E3E3E' : '#F5F5F5'}
            />
        </form>
    )
}