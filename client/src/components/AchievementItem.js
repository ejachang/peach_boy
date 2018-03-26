import React from 'react';

const AchievementItem = (props) => {
  let { achievement } = props;
  return (
    <div>  
      <li >{ achievement }</li>
    </div>
  );
};

export default AchievementItem;
