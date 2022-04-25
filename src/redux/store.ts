import { combineReducers, createStore, applyMiddleware } from 'redux';
import {abilitiesReducer} from './reducers/abilitiesReducer';


import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import { projectsReducer } from './reducers/projectsReducer';

const reducers = combineReducers({
    abilities: abilitiesReducer,
    projects: projectsReducer
})

export default function configureStore(preloadedState?: any) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
   // @ts-ignore
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducers, preloadedState, composedEnhancers)

  return store
}