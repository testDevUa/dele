import React from 'react';
import './Profile.css';
import ProfileStatus from './ProfileStatus';

const Profile = (props) => {

    let styleName = (fullname) => {
        return fullname.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }

    if (!props.profile) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div className='profile'>
                <img className='profile__image' src={props.profile.photos.small}></img>
                <div className='profile__name'>{styleName(props.profile.fullName)}</div>
                <div className='profile__about'>{props.profile.aboutMe}</div>
                <ProfileStatus status={props.status} updateStatus={props.setStatus} />
            </div>
        )
    }
}

export default Profile;