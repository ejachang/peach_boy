const _defaultAvatar = Object.freeze({
  avatar: './img-ref/avatar-girl.png'
});

const avatarReducer = (state = _defaultAvatar, action) => {
  let newAvatar = Object.assign({}, state);
  if (action.type) {
    newAvatar.payload = action.payload;
    return newAvatar;
  } 
  return state;
};

export default avatarReducer; 