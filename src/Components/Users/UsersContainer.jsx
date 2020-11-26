import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { toggleFolllow, setUsers, setTotalUsers, setPage, toggleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../Components/Preloader/Preloader';

class UsersAPIContainer extends React.Component {
    

    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=10`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
            console.log(this.props);
        })
    }

    setPageNumber = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        })
    }

    render() {

        return (
            <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users isFetching={toggleIsFetching} pageNumber={this.props.pageNumber} users={this.props.users} toggleFollow={this.props.toggleFolllow} pagesCount={this.props.pagesCount} setPageNumber={this.setPageNumber}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return state.usersReducer    
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(toggleFolllowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalCount: (count) => {
//             dispatch(setTotalUsersAC(count))
//         },
//         setPage: (page) => {
//             dispatch(setPageAC(page))
//         },
//         toggleFetching: (param) => {
//             dispatch(toggleIsFetchingAC(param))
//         }
//     }
// }

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

const UsersContainer = connect(mapStateToProps, 
    {
        toggleFolllow, setUsers, setTotalUsers, setPage, toggleIsFetching

    }
    )(UsersAPIContainer);

export default UsersContainer;