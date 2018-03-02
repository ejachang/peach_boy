import React from 'react';
import AchievementItem from './AchievementItem.jsx';

const Scoreboard = (props) => (
  <div className="peachFont peachsbFont peachsb peachsbPosition">
  <div className="peachsbFont"> The peach has been clicked { props.peachClickCount } times.</div>
  <div className="peachsbFont"> You have { props.achievements.length } achievements.</div>
  <div className="peachsbFont">Next achievement:  {/* {props.currentPeachStatus[props.aidx]} */}</div> 
   
  <h4 className="peachsFont"> Achievements </h4>
  {/* { props.achievements.map(achievement => <ListItem achievement={achievement}/>)} */}
  </div>
)

export default Scoreboard;
