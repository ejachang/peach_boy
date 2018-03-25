import { ADD_ACHIEVEMENT, ADD_CLICK } from '../actions/scoreboardActions';

const _defaultScoreboard = Object.freeze({
  clicks: 0,
  achievements: [],
  nextAchievement: 'Just Peachy!',
  image: './img-ref/a-img/0-modal.png' 
});

const scoreboardReducer = (state = _defaultScoreboard, action) => {
  let newScoreboard = Object.assign({}, state);
  switch (action.type) {
  case ADD_ACHIEVEMENT: 
    newScoreboard.achievements.push(action.payload.achievement);
    newScoreboard.nextAchievement = action.payload.nextAchievement;
    return newScoreboard;
  case ADD_CLICK:
    newScoreboard.clicks++;
    return newScoreboard;
  }
  return state; 
};

export default scoreboardReducer;