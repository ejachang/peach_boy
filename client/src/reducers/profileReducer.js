import { CHANGE_AVATAR, CHANGE_GIRL, CHANGE_BOY, CHANGE_GRILL } from '../actions/profileActions';

const _defaultAvatar = Object.freeze({
  name: null,
  avatar: './img-ref/avatar-girl.png',
});

const profileReducer = (state = _defaultAvatar, action) => {
  let newAvatar = Object.assign({}, state);
  switch (action.type) {
  
  case CHANGE_AVATAR: 
    newAvatar.avatar = action.payload;
    return newAvatar; 
  } 
  return state;
};

export default profileReducer; 