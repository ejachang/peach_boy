import React from 'react';
import { connect } from 'react-redux';

import AchievementItem from './AchievementItem';

const Scoreboard = () => (
  <div className="peachFont peachsbFont peachsb peachsbPosition">
    <div className="peachsbFont"> The peach has been clicked 0 times.</div>
    <div className="peachsbFont"> You have 0 achievements.</div>
    <div className="peachsbFont">Next achievement:  {/* {props.currentPeachStatus[props.aidx]} */}</div> 
   
    <h4 className="peachsFont peachsbSubtitle"> Achievements </h4>
    {/* { props.achievements.map(achievement => <ListItem achievement={achievement}/>)} */}
  </div>
);

export default Scoreboard;
