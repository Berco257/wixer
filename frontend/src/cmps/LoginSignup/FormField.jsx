import React from 'react'
import { ErrorMessage, Field } from 'formik'
import { TextFieldOutlined } from '../Mui/TextFieldOutlined'

export const FormField = ({ type, name, label }) => {
    return (
        <div className="form-field">
            <Field type={type} name={name} label={label} as={TextFieldOutlined} />
            <ErrorMessage className="error" name={name} component="div" />
        </div>
    )
}