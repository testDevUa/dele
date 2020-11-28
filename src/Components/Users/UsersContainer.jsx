import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { toggleFolllow, setUsers, setTotalUsers, setPage, toggleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../Components/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersAPIContainer extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageNumber).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
        })
    }
    setPageNumber = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(page);
        usersAPI.getUsers(this.props.pageNumber).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
        })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users isFetching={toggleIsFetching} pageNumber={this.props.pageNumber} users={this.props.users} toggleFollow={this.props.toggleFolllow} pagesCount={this.props.pagesCount} setPageNumber={this.setPageNumber} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return state.usersReducer
}

const UsersContainer = connect(mapStateToProps,
    {
        toggleFolllow, setUsers, setTotalUsers, setPage, toggleIsFetching

    }
)(UsersAPIContainer);

export default UsersContainer;