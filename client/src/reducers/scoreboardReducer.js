import { ADD_ACHIEVEMENT } from '../actions/scoreboardActions';

const _defaultScoreboard = Object.freeze({
  clicks: 0,
  achievements: ['Just Peachy!']
});

const scoreboardReducer = ( state = _defaultScoreboard, action) => {
  return state; 
};

export default scoreboardReducer;