import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getUserData, LogoutThunk} from '../../redux/authReducer';
import { getUserId, getUserLogin } from '../../redux/auth-selector';

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

// let mapStateToProps = (state) => {
//     return state.authReducer;
// }

let mapStateToProps = (state) => ({
    getUserId: getUserId(state),
    getUserLogin: getUserLogin(state)
})

export default connect(mapStateToProps, {
    getUserData,
    LogoutThunk
})(HeaderContainer);