const CHANGE_AVATAR = 'CHANGE_AVATAR';

const changeAvatar = (avatar) => {
  let avatarInfo = { type: CHANGE_AVATAR };
  if (avatar === 'girl') {
    avatarInfo.payload = './img-ref/avatar-girl.png';
  } else if (avatar === 'boy') {
    avatarInfo.payload = './img-ref/avatar-boy.png';
  } else {
    avatarInfo.payload = './img-ref/avatar-grill.png';
  }
  return avatarInfo;
};


export default { changeAvatar };