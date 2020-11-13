import Axios from 'axios';
import React from 'react';
import User from './User/User';
import './Users.css'

const Users = (props) => {

    if (props.users.length === 0) {

        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            console.log(response);

            props.setUsers(response.data.items);
        })
    }

    let allUsers = props.users.map(elem => <User toggleFollow={props.toggleFollow} key={elem.id} id={elem.id} name={elem.name} followed={elem.followed} />)

    return (
        <div className='users'>
            {allUsers}
        </div>
    )
}

export default Users;