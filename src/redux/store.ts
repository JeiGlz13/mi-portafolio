import { createStore,combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {abilitiesReducer} from './reducers/abilitiesReducer';

const reducers = combineReducers({
    abilities: abilitiesReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))