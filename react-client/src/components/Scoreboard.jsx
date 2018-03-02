import React from 'react';
import ListItem from './ListItem.jsx';

const Scoreboard = (props) => (
  <div className="peachFont peachScoreboard">
  <div>My name is:</div>
    <p></p>
    The peach has been clicked { props.peachClickCount } times.
    <p></p>
    You have { props.achievements.length } achievements.
    <p></p>
    {/* Next achievement: {props.currentPeachStatus[props.aidx]} */}
    <h4> Achievements </h4>
      {/* { props.achievements.map(achievement => <ListItem achievement={achievement}/>)} */}
  </div>
)

export default Scoreboard;
