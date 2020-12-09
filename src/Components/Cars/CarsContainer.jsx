import React from 'react';
import { connect } from 'react-redux';
import { updateImage, updateMake, updateModel, addCar } from '../../redux/catalogReducer';
import Cars from './Cars';

class CarsContainer extends React.Component {
    render() {
        return(
            <Cars {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        carsPage: state.catalogReducer
    }
}

export default connect(mapStateToProps, {
    updateMake,
    updateModel,
    updateImage,
    addCar
})(CarsContainer);