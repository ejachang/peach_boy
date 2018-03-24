// const avatars = {
//   avatar: [
//     './img-ref/avatar-boy.png',
//     './img-ref/avatar-girl.png',
//     './img-ref/avatar-grill.png'
//   ]
// };

const defaultAvatar = Object.freeze({
  avatar: './img-ref/avatar-girl.png'
});

const avatarReducer = () => {
  if (action.type === 'CHANGE_AVATAR') {
    const newAvatar = [...state, action.payload];
    return newAvatar;
  } 
  return state;
};

export default avatarReducer; 