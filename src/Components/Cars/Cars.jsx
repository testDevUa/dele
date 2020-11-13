import React from 'react';
import Car from './Car/Car';
import './Cars.css'

const Cars = (props) => {

    let updateMakeText = (e) => {
        props.updateMake(e.target.value);
    }

    let updateModelText = (e) => {
        props.updateModel(e.target.value);
    }

    let updateImageText = (e) => {
        props.updateImage(e.target.value);
    }

    let carAdd = () => {
        props.addCar();
    }


    let allCars = props.carsPage.cars.map(elem => <Car make={elem.make} model={elem.model} reviews={elem.reviews} image={elem.image} />)

    return (
        <div className='cars'>
            <div className='cars__form'>
                <input onChange={updateMakeText} className='cars__input' placeholder='Введите марку' />
                <input onChange={updateModelText} className='cars__input' placeholder='Введите модель' />
                <input onChange={updateImageText} className='cars__input' placeholder='Ссылка на изображение' />
            </div>
            <button onClick={carAdd} className='cars__add'>Добавить</button>
            <div className='cars__inner'>
                {allCars}
            </div>
        </div>
    )
}

export default Cars;