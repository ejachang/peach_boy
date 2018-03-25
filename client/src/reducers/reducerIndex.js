import { combineReducers } from 'redux';

import achievementsReducer from './scoreboardReducer';
import profileReducer from './profileReducer';

const reducerIndex = combineReducers({
  achievementsReducer,
  profileReducer
});

export default reducerIndex;