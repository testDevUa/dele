import { combineReducers, createStore } from 'redux';
import catalogReducer from './catalogReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    catalogReducer,
    usersReducer
})

const store = createStore(reducers);

window.store = store;

export default store;