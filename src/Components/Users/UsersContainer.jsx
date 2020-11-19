import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { toggleFolllowAC, setUsersAC, setTotalUsersAC, setPageAC } from '../../redux/usersReducer';
import Users from './Users';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=10`).then(response => {
            console.log(response);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    setPageNumber = (page) => {
        this.props.setPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`).then(response => {
            console.log(response);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    render() {

        return (
            <Users pageNumber={this.props.pageNumber} users={this.props.users} toggleFollow={this.props.toggleFolllow} pagesCount={this.props.pagesCount} setPageNumber={this.setPageNumber}/>
        )
    }
}

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
        },
        setTotalCount: (count) => {
            dispatch(setTotalUsersAC(count))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;