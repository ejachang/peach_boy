export const ADD_ACHIEVEMENT = 'ADD_ACHIEVEMENT';
export const ADD_CLICK = 'ADD_CLICK';
export const UPDATE_PEACH_IMAGE = 'UPDATE_PEACH_IMAGE';

const achievementList = [
  'Just Peachy!',
  'Aren\'t you a peach',
  'I appeachiate you!',
  'Peach for the stars!',
  'You only peach once',
  'You want a peach of me???',
  'You\'ve got a peach of my heart',
  'Peach, don\'t kill my vibe',
  'My life is a peach of sheeps',
  'I\'ve got 99 problems but a peach ain\'t one',
  'Practice what you peach',
  'Impeachable',
  'Touch the Peach Award',
  'Aren\'t you peached yet',
  'Peach me I\'m dreaming',
  'Peach better have my money',
  'No more peaches!'
];

const imageList = [
  './img-ref/a-img/0-modal.png',
  './img-ref/a-img/1-modal.png',
  './img-ref/a-img/2-modal.png',
  './img-ref/a-img/3-modal.png',
  './img-ref/a-img/4-modal.png',
  './img-ref/a-img/5-modal.png',
  './img-ref/a-img/6-modal-default-end.png',
];


let achievementID = 0;
let imageID = 0;

export const addAchievement = () => {
  achievementID++;
  return {
    type: ADD_ACHIEVEMENT,
    payload: {
      achievement: achievementList[achievementID],
      nextAchievement: achievementList[achievementID + 1],
    }
  };
};

export const addClick = () => {
  return {
    type: ADD_CLICK
  };
};

export const updateImage = () => {
  imageID++;
  return {
    type: UPDATE_PEACH_IMAGE,
    payload: {
      newImage: imageList[imageID]
    }
  };
};