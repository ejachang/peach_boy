import React from 'react';
import ListItem from './ListItem.jsx';

const Scoreboard = (props) => (
  <div className="peachFont peachScoreboard">
  <div className="peachScorefont">My name is:</div>
  {/* avatar here */}
  <div className="peachScorefont"> The peach has been clicked { props.peachClickCount } times.</div>
  <div className="peachScorefont"> You have { props.achievements.length } achievements.</div>
    {/* Next achievement: {props.currentPeachStatus[props.aidx]} */}
  <h4 className="peachScorefont"> Achievements </h4>
  {/* { props.achievements.map(achievement => <ListItem achievement={achievement}/>)} */}
  </div>
)

export default Scoreboard;
