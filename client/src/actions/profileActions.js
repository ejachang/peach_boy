// const GIRL = './img-ref/avatar-girl.png';
// const BOY = './img-ref/avatar-boy.png';
// const GRILL = './img-ref/avatar-grill.png';
const CHANGE_GIRL = 'CHANGE_GIRL';
const CHANGE_GRILL = 'CHANGE_GRILL';
const CHANGE_BOY = 'CHANGE_BOY';

const changeGirl = (avatarType) => {
  return {
    type: CHANGE_GIRL,
    avatarType
  };
};

const changeBoy = (avatarType) => {
  return {
    type: CHANGE_BOY,
    avatarType
  };
};

const changeGrill = (avatarType) => {
  return {
    type: CHANGE_GRILL,
    avatarType
  };   
};

export default {
  changeGirl,
  changeBoy,
  changeGrill,
  CHANGE_GIRL,
  CHANGE_GRILL,
  CHANGE_BOY
};