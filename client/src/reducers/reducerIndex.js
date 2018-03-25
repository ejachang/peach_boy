import { combineReducers } from 'redux';

import achievementsReducer from './achievementsReducer';
import profileReducer from './profileReducer';

const reducerIndex = combineReducers({
  achievementsReducer,
  profileReducer
});

export default reducerIndex;