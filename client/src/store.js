import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducerIndex from './reducers/reducer-index';


let store = createStore(
  reducerIndex
);

let initialState = store.getState();

// const middleware = applyMiddleware(promise(), thunk, logger());
// const store = ( initialState = {} ) => {
//   createStore(
//     reducerIndex, 
//     initialState
//   );
// };

export default store;