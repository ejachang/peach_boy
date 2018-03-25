import { CHANGE_AVATAR, CHANGE_NAME } from '../actions/profileActions';

const _defaultProfile = Object.freeze({
  name: null,
  avatar: './img-ref/avatar-girl.png',
});

const profileReducer = (state = _defaultProfile, action) => {
  let newProfile = Object.assign({}, state);
  switch (action.type) {
  case CHANGE_AVATAR: 
    newProfile.avatar = action.avatarload;
    return newProfile; 
  case CHANGE_NAME:
    newProfile.name = action.nameload;
    return newProfile;
  } 
  return state;
};

export default profileReducer; 