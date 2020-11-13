import React from 'react';
import { connect } from 'react-redux';
import { toggleFolllowAC, setUsersAC } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return state.usersReducer    
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFolllowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;