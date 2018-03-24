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

let achievementID = -1;

const addAchievement = () => {
  achievementID++;
  return {
    type: 'ADD_ACHIEVEMENT_TITLE',
    payload: {
      achievement: achievementList[achievementID],
    }
  };
};

export default addAchievement;