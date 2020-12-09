let initialState = {
    cars: [
        {
            make: 'Toyota',
            model: 'Camry',
            reviews: 1000,
            image: 'https://storage1a.censor.net/images/f/e/6/e/fe6e704e3bfb6c9959fa93e5d60e4aed/original.jpg'
        },
        {
            make: 'BMW',
            model: '5 series',
            reviews: 500,
            image: 'https://auto.vercity.ru/gallery/img/automobiles/BMW/2000%20BMW%20530i%20Sedan%20(US)/900x/2000%20BMW%20530i%20Sedan%20(US)%20001.jpg'
        }
    ],
    makeText: '',
    modelText: '',
    imageText: ''
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-MAKE' : {
            let stateCopy = {...state};
            stateCopy.makeText = action.make;
            return stateCopy;
        }
        case 'UPDATE-MODEL' : {
            let stateCopy = {...state};
            stateCopy.modelText = action.model;
            return stateCopy;
        }
        case 'UPDATE-IMAGE' : {
            let stateCopy = {...state};
            stateCopy.imageText = action.image;
            return stateCopy;
        }
        case 'ADD-CAR' : {
            let stateCopy = {...state};
            stateCopy.cars.push({make: state.makeText, model: state.modelText, image: state.imageText})
            return stateCopy;
        }
        default: return state;
    }
}

export const updateMake = (text) => ({type: 'UPDATE-MAKE', make: text});
export const updateModel = (text) => ({type: 'UPDATE-MODEL', model: text});
export const updateImage = (text) => ({type: 'UPDATE-IMAGE', image: text});
export const addCar = () => ({type: 'ADD-CAR'});

export default catalogReducer;