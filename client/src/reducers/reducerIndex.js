import { combineReducers } from 'redux';

import scoreboardReducer from './scoreboardReducer';
import profileReducer from './profileReducer';

const reducerIndex = combineReducers({
  scoreboardReducer,
  profileReducer
});

export default reducerIndex;