import React from 'react';
import { compose } from 'redux';
import User from './User/User';
import './Users.css'

const Users = (props) => {

    let pagesCount = [];

        if (props.pagesCount > 10) {
            for (let i = 1; i <= 10; i++) {
                pagesCount.push(i);
            }
        } else {
            for (let i = 1; i <= props.pagesCount; i++) {
                pagesCount.push(i);
            }
        }

    let paginator = pagesCount.map(elem => <div key={elem} onClick={() => {props.setPageNumber(elem)}} className={(props.pageNumber === elem) ? 'paginator__item active' : 'paginator__item'} >{elem}</div>);

    let allUsers = props.users.map(elem => <User toggleFollow={props.toggleFollow} key={elem.id} id={elem.id} name={elem.name} followed={elem.followed} />);

    return(
        <div className='users'>
                <div className='paginator'>
                    {paginator}
                </div>
                {allUsers}
            </div>
    )
}


export default Users;