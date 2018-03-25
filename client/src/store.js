import { applyMiddleware, createStore } from 'redux';

// import thunk from 'redux-thunk';

// import { logger } from 'redux-logger';
// import promise from 'redux-promise-middleware';
// const middleware = applyMiddleware(promise(), thunk, logger());

import reducerIndex from './reducers/reducerIndex';

let store = createStore(
  reducerIndex,
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

let initialState = store.getState();

// console.log('initial state', initialState)

// const store = ( initialState = {} ) => {
//   createStore(
//     reducerIndex, 
//     initialState
//   );
// };

export default store;