import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { FormField } from './FormField'
import { DemoButton } from './DemoButton'
import { SubmitButton } from './SubmitButton'
import { LoginLink } from './LoginLink'
import { SignupLink } from './SignupLink'
import { onSignup, onLogin } from '../../store/actions/user.actions'
import { setLoader } from '../../store/actions/general.actions'

export const LoginSignup = ({ mode, setMode }) => {
    const dispatch = useDispatch()
    const initialValues = {
        fullname: '',
        username: '',
        password: ''
    }
    const validate = creds => {
        const errors = {}
        for (const key in creds) if (!creds[key]) errors[key] = '*required'
        if (mode === 'login') delete errors.fullname
        return errors
    }
    const onSubmit = async creds => {
        dispatch(setLoader(true))
        const func = mode === 'login' ? onLogin : onSignup
        await dispatch(func(creds))
        dispatch(setLoader(false))
    }
    const loginDemo = async () => {
        dispatch(setLoader(true))
        await dispatch(onLogin({
            username: 'demo',
            password: 'demo'
        }))
        dispatch(setLoader(false))
    }

    return (
        <div className="login-signup flex direction-column align-center">
            <h1>{mode === 'login' ? 'Login' : 'Signup'}</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex direction-column align-start">
                        {mode === 'signup' && <FormField type="text" name="fullname" label="Fullname" />}
                        <FormField type="text" name="username" label="Username" />
                        <FormField type="password" name="password" label="Password" />
                        <SubmitButton isSubmitting={isSubmitting} mode={mode} />
                        {mode === 'login' && <SignupLink setMode={setMode} />}
                        {mode === 'signup' && <LoginLink setMode={setMode} />}
                        <DemoButton loginDemo={loginDemo} />
                    </Form>
                )}
            </Formik>
        </div>
    )
}