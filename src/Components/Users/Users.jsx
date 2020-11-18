import Axios from 'axios';
import React from 'react';
import User from './User/User';
import './Users.css'

class Users extends React.Component {

    componentDidMount() {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users?page=1&count=20").then(response => {
            console.log(response);
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let allUsers = this.props.users.map(elem => <User toggleFollow={this.props.toggleFollow} key={elem.id} id={elem.id} name={elem.name} followed={elem.followed} />);
        return (
            <div className='users'>
                {allUsers}
            </div>
        )
    }
}


export default Users;