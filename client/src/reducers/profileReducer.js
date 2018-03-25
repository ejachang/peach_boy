import { CHANGE_GIRL, CHANGE_GRILL, CHANGE_BOY } from '../actions/profileActions';

const _defaultAvatar = Object.freeze({
  name: null,
  avatar: './img-ref/avatar-girl.png',
});

const profileReducer = (state = _defaultAvatar, action) => {
  let newAvatar = Object.assign({}, state);
  switch (action.type) {
  case CHANGE_GIRL: 
    newAvatar.avatar = './img-ref/avatar-girl.png';
    return newAvatar;
  }
  return state;
  // if (action.type) {
  //   newAvatar.payload = action.payload;
  //   return newAvatar;
  // } 
  // return state;
};

export default profileReducer; 