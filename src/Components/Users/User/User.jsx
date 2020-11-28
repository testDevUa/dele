import Axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';
import './User.css'

const User = (props) => {

    return (
        <div className='user'>
            <div className='user__inner'>
                <div className='user__leftSide'>
                    <div className='user__image'>
                        {/* <img src={props.image} /> */}
                    </div>
                    <div className='user__info'>
                        <NavLink to={'/Profile/' + props.id}>
                            <div className='user__fullname'>{props.name}</div>
                        </NavLink>
                        <div className='user__car'></div>
                    </div>
                </div>
                <div className='user__rightSide'>
                    <div className='user__location'>
                        <div className='user__country'></div>
                        <div className='user__city'></div>
                    </div>
                    {props.followed ? <button className='user__unfollow' onClick={() => {
                        usersAPI.unfollowUser(props.id).then(data => {
                            if (data.resultCode == 0) {
                                props.toggleFollow(props.id);
                            }

                        })
                    }}>Unfollow</button> : <button className='user__follow' onClick={() => {
                        usersAPI.followUser(props.id).then(data => {
                            if (data.resultCode == 0) {
                                props.toggleFollow(props.id);
                            }

                        })
                    }}>Follow</button>}
                </div>
            </div>
        </div>
    )
}

// {props.car}

// {props.country}

//{props.city}

export default User;