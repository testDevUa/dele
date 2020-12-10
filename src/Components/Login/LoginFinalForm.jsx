import React from 'react';
import { Field, Form } from 'react-final-form';
import './Login.css';

const LoginFinalForm = (props) => {
    return(
        <Form onSubmit={(formObj) => {
            console.log(formObj)
            props.login(formObj.email, formObj.password)
        }}>
            {({handleSubmit}) => (
                <form className='form' onSubmit={handleSubmit}>
                    <Field name='email'>
                        {({input}) => (
                            <input className='form__input' type='email' placeholder='Email...' {...input}/>
                        )}
                    </Field>
                    <Field name='password'>
                        {({input}) => (
                            <input className='form__input' type='password' placeholder='Password...' {...input}/>
                        )}
                    </Field>
                    <button className='form__btn' type='submit'>Submit</button>
                </form>
            )}
        </Form>
    )
}

export default LoginFinalForm;