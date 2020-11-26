import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setUserData} from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
            console.log(response);
        })
    }

    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return state.authReducer;
}

export default connect(mapStateToProps, {
    setUserData
})(HeaderContainer);