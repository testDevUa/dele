import React from 'react';
import './User.css'

const User = (props) => {

    let toggleFollowing = () => {
        let id = props.id;
        props.toggleFollow(id);
    }

    return (
        <div className='user'>
            <div className='user__inner'>
                <div className='user__leftSide'>
                    <div className='user__image'>
                        {/* <img src={props.image} /> */}
                    </div>
                    <div className='user__info'>
                        <div className='user__fullname'>{props.name}</div>
                        <div className='user__car'></div>
                    </div>
                </div>
                <div className='user__rightSide'>
                    <div className='user__location'>
                        <div className='user__country'></div>
                        <div className='user__city'></div>
                    </div>
                    {props.followed ? <button className='user__follow' onClick={toggleFollowing}>Follow</button> : <button className='user__unfollow' onClick={toggleFollowing}>Unfollow</button>}
                </div>
            </div>
        </div>
    )
}

// {props.car}

// {props.country}

//{props.city}

export default User;