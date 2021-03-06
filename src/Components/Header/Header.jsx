import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    if (!props.getUserId) {
        return (
            <div className='header'>
                <nav className='nav'>
                    <div className='nav__login'>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                    <NavLink className='nav__item' to='/About'>О нас</NavLink>
                    <NavLink className='nav__item' to='/Messenger'>Мессенджер</NavLink>
                    <NavLink className='nav__item' to='/Users'>Пользователи</NavLink>
                    <NavLink className='nav__item' to='/Catalog'>Каталог автомобилей</NavLink>
                </nav>
            </div>
        )
    } else {
        return (
            <div className='header'>
                <nav className='nav'>
                    <div className='nav__login'>
                        <NavLink to={'/Profile'}>
                            <div className='nav__login-login'>{props.getUserLogin}</div>
                            <FontAwesomeIcon onClick={() => {props.LogoutThunk()}} className='nav__login-icon' icon={faSignOutAlt} />
                        </NavLink>
                    </div>
                    <NavLink className='nav__item' to='/About'>О нас</NavLink>
                    <NavLink className='nav__item' to='/Messenger'>Мессенджер</NavLink>
                    <NavLink className='nav__item' to='/Users'>Пользователи</NavLink>
                    <NavLink className='nav__item' to='/Catalog'>Каталог автомобилей</NavLink>
                </nav>
            </div>
        )
    }
    // return (
    //     <div className='header'>
    //         <nav className='nav'>
    //             <div className='nav__login'>
    //                 <NavLink to={'/login'}>Login</NavLink>
    //             </div>
    //             <NavLink className='nav__item' to='/About'>О нас</NavLink>
    //             <NavLink className='nav__item' to='/Messenger'>Мессенджер</NavLink>
    //             <NavLink className='nav__item' to='/Users'>Пользователи</NavLink>
    //             <NavLink className='nav__item' to='/Catalog'>Каталог автомобилей</NavLink>
    //         </nav>
    //     </div>
    // )
}

export default Header;