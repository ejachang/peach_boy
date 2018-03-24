import { combineReducers } from 'redux';

import achievementsReducer from './achievementsReducer';
import avatarReducer from './avatarReducer';

const reducerIndex = combineReducers({
  achievementsReducer,
  avatarReducer
});

export default reducerIndex;