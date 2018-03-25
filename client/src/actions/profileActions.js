// const GIRL = './img-ref/avatar-girl.png';
// const BOY = './img-ref/avatar-boy.png';
// const GRILL = './img-ref/avatar-grill.png';
export const CHANGE_GIRL = 'CHANGE_GIRL';
export const CHANGE_GRILL = 'CHANGE_GRILL';
export const CHANGE_BOY = 'CHANGE_BOY';

export const changeGirl = (avatarType) => {
  return {
    type: CHANGE_GIRL,
    avatarType
  };
};

export const changeBoy = (avatarType) => {
  return {
    type: CHANGE_BOY,
    avatarType
  };
};

export const changeGrill = (avatarType) => {
  return {
    type: CHANGE_GRILL,
    avatarType
  };   
};

// export default {
//   changeGirl,
//   changeBoy,
//   changeGrill,
//   CHANGE_GIRL,
//   CHANGE_GRILL,
//   CHANGE_BOY
// };