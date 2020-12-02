import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUsers, setTotalUsers, setPage, toggleIsFetching, getUsers, setAllUsers, followUser, unfollowUser } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../Components/Preloader/Preloader';

class UsersAPIContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.pageNumber)
    }
    setPageNumber = (page) => {
        this.props.setAllUsers(page)
    }
    

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users isFetching={toggleIsFetching} pageNumber={this.props.pageNumber} users={this.props.users} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} pagesCount={this.props.pagesCount} setPageNumber={this.setPageNumber} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return state.usersReducer
}

const UsersContainer = connect(mapStateToProps,
    {
        setUsers, setTotalUsers, setPage, toggleIsFetching, getUsers, setAllUsers, followUser, unfollowUser

    }
)(UsersAPIContainer);

export default UsersContainer;