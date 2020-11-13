import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='nav'>
                <NavLink className='nav__item' to='/Messenger'>Мессенджер</NavLink>
                <NavLink className='nav__item' to='/Users'>Пользователи</NavLink>
                <NavLink className='nav__item' to='/Catalog'>Каталог автомобилей</NavLink>
            </nav>
        </div>
    )
}

export default Header;