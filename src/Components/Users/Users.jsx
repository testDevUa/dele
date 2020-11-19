import Axios from 'axios';
import React from 'react';
import { compose } from 'redux';
import User from './User/User';
import './Users.css'

class Users extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=10`).then(response => {
            console.log(response);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    setPageNumber = (page) => {
        debugger;
        this.props.setPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`).then(response => {
            console.log(response);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    render() {

        let pagesCount = [];

        if (this.props.pagesCount > 10) {
            for (let i = 1; i <= 10; i++) {
                pagesCount.push(i);
            }
        } else {
            for (let i = 1; i <= this.props.pagesCount; i++) {
                pagesCount.push(i);
            }
        }

        let paginator = pagesCount.map(elem => <div key={elem} onClick={() => {this.setPageNumber(elem)}} className={(this.props.pageNumber === elem) ? 'paginator__item active' : 'paginator__item'} >{elem}</div>);

        let allUsers = this.props.users.map(elem => <User toggleFollow={this.props.toggleFollow} key={elem.id} id={elem.id} name={elem.name} followed={elem.followed} />);
        return (
            <div className='users'>
                <div className='paginator'>
                    {paginator}
                </div>
                {allUsers}
            </div>
        )
    }
}


export default Users;