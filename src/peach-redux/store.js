import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducerIndex from './reducers/reducer-index';

const middleware = applyMiddleware(promise(), thunk, logger());
const storeIndex = createStore(reducerIndex, middleware);

export default storeIndex;