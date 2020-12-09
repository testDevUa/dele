import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = (props) => {
    if (props.isAuth == true) {
        return(
            <Redirect to='/Profile' />
        )
    }
    return(
        <div>
            <LoginForm login={props.LoginThunk} />
        </div>
    )
}

export default Login;