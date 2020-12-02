import { applyMiddleware, combineReducers, createStore } from 'redux';
import catalogReducer from './catalogReducer';
import usersReducer from './usersReducer';
import aboutReducer from './aboutReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';
import messengerReducer from './messengerReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    catalogReducer,
    usersReducer,
    aboutReducer,
    profileReducer,
    authReducer,
    messengerReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;