// const GIRL = './img-ref/avatar-girl.png';
// const BOY = './img-ref/avatar-boy.png';
// const GRILL = './img-ref/avatar-grill.png';

export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const CHANGE_GIRL = 'CHANGE_GIRL';
export const CHANGE_GRILL = 'CHANGE_GRILL';
export const CHANGE_BOY = 'CHANGE_BOY';

export const changeGirl = () => {
  return {
    type: CHANGE_AVATAR,
    payload: './img-ref/avatar-girl.png'
  };
};

export const changeBoy = () => {
  return {
    type: CHANGE_AVATAR,
    payload: './img-ref/avatar-boy.png'
  };
};

export const changeGrill = () => {
  return {
    type: CHANGE_AVATAR,
    payload: './img-ref/avatar-grill.png'
  };   
};
