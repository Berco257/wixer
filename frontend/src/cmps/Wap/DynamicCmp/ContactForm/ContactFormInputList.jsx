import React from 'react'

export const ContactFormInputList = ({ form, StyledInput, handleChange }) => {
    return (
        <>
            <StyledInput
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                name="phone"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Email"
                value={form.email}
                onChange={handleChange}
                name="email"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                name="subject"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Your Message"
                value={form.msg}
                onChange={handleChange}
                name="msg"
                variant="standard"
                fullWidth={true}
            />
        </>
    )
}