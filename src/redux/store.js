import { combineReducers, createStore } from 'redux';
import catalogReducer from './catalogReducer';
import usersReducer from './usersReducer';
import aboutReducer from './aboutReducer';

let reducers = combineReducers({
    catalogReducer,
    usersReducer,
    aboutReducer
})

const store = createStore(reducers);

window.store = store;

export default store;