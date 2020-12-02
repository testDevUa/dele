import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.authReducer
})

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        debugger;
        if (!props.isAuth.isAuth) {
            return <Redirect to='/Login' />
        }
        return <Component {...props} />
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}