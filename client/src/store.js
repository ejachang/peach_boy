import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducerIndex from './reducers/reducerIndex';


let store = createStore(
  reducerIndex,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

let initialState = store.getState();

// console.log('initial state', initialState)

// const middleware = applyMiddleware(promise(), thunk, logger());
// const store = ( initialState = {} ) => {
//   createStore(
//     reducerIndex, 
//     initialState
//   );
// };

export default store;