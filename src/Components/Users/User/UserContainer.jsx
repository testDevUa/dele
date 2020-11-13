import React from 'react';
import { connect } from 'react-redux';
import User from './User';

let mapStateToProps = (state) => {
    return state.usersReducer
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFolllowAC(userId))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;