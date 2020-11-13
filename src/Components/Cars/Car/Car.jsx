import React from 'react';
import './Car.css';

const Car = (props) => {
    return (
        <div className='cars__item'>
            <div className='car__bg'>
                <img className='car__image' src={props.image} />
            </div>
            <div className='car__top'>
                <div className='car__title'>{props.make} {props.model}</div>
                <div className='car__top-reviews'>Отзывов: <span>{props.reviews}</span></div>
            </div>
            <button className='car__btn'>Подробнее</button>
        </div>
    )
}

export default Car;