import React from 'react';
import { connect } from 'react-redux';
import { updateImageAC, updateMakeAC, updateModelAC, addCarAC } from '../../redux/catalogReducer';
import Cars from './Cars';

let mapStateToProps = (state) => {
    return {
        carsPage: state.catalogReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMake: (text) => {
            dispatch(updateMakeAC(text))
        },
        updateModel: (text) => {
            dispatch(updateModelAC(text))
        },
        updateImage: (text) => {
            dispatch(updateImageAC(text))
        },
        addCar: () => {
            dispatch(addCarAC())
        }
    }
    
}

const CarsContainer = connect(mapStateToProps, mapDispatchToProps)(Cars)

export default CarsContainer;