import React from 'react';
import { Form, Field } from 'react-final-form';
import './Login.css';

const LoginForm = (props) => {
    return (
        <Form onSubmit={(formObj) => {
            props.login(formObj.email, formObj.password, true);
        }}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='email'>
                        {({ input }) => <input placeholder='Email...' type='email' {...input} />}
                    </Field>
                    <Field name='password'>
                        {({ input }) => <input placeholder='Password...' type='password' {...input} />}
                    </Field>
                    <button type='submit'>Login</button>
                </form>
            )}
        </Form>
    )
}

export default LoginForm;