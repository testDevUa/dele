import { combineReducers, createStore } from 'redux';
import catalogReducer from './catalogReducer';
import usersReducer from './usersReducer';
import aboutReducer from './aboutReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    catalogReducer,
    usersReducer,
    aboutReducer,
    profileReducer,
    authReducer
})

const store = createStore(reducers);

window.store = store;

export default store;