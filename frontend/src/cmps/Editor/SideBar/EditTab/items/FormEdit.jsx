import React, { useState, useEffect } from 'react'
import { FormEditTheme } from '../props/FormEditTheme'
import { RenderProps } from '../props/RenderProps'

export const FormEdit = ({ data, updateCmp }) => {
    const [isDark, setIsDark] = useState(data.isDark)

    useEffect(() => {
        setIsDark(data.isDark)
    }, [data.isDark])

    let timeout
    const handleChange = ({ target }) => {
        setIsDark(target.checked)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateCmp('data', { ...data, isDark: target.checked })
        }, 20);
    }

    const propList = [
        {
            name: 'theme',
            cmp: <FormEditTheme handleChange={handleChange} isDark={isDark} />
        }
    ]

    return (
        <RenderProps propList={propList} />
    )
}