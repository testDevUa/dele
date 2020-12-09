import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getUserData, LogoutThunk} from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
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
    getUserData,
    LogoutThunk
})(HeaderContainer);