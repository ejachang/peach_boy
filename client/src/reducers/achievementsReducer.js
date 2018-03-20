const achievementsReducer = ( state = {achievements: []}, action) => {
  switch (action.type) {
  case 'ADD_ACHIEVEMENT_TITLE': {
    return [
      ...state, 
      {
        text: action.payload.achievement,
      }
    ];
  }
  default:
    return state; 
  }
};

export default achievementsReducer;