import { ADD_ACHIEVEMENT } from '../actions/scoreboardActions';

const _defaultScoreboard = Object.freeze({
  clicks: 0,
  achievements: [],
  nextAchievement: 'Just Peachy!',
  image: './img-ref/a-img/0-modal.png' 
});

const scoreboardReducer = ( state = _defaultScoreboard, action) => {


  return state; 
};

export default scoreboardReducer;