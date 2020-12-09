import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import {LoginThunk, getUserData} from '../../redux/authReducer';

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }
    render() {
        return(
            <Login {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return state.authReducer;
}

export default connect(mapStateToProps, {LoginThunk, getUserData})(LoginContainer);