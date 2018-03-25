import { CHANGE_GIRL, CHANGE_GRILL, CHANGE_BOY } from '../actions/profileActions';

const _defaultAvatar = Object.freeze({
  name: '',
  avatar: './img-ref/avatar-girl.png',
});

const profileReducer = (state = _defaultAvatar, action) => {
  let newAvatar = Object.assign({}, ...state);
  if (action.type) {
    newAvatar.payload = action.payload;
    return newAvatar;
  } 
  return state;
};

export default profileReducer; 