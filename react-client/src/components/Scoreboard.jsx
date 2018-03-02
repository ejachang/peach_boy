import React from 'react';
import ListItem from './ListItem.jsx';

const Scoreboard = (props) => (
  <div className="peachFont peachScoreboard">
  <h4  className="peachScorefont">INFO</h4>
  {/* TODO: include conditional rendering for name if entered */}
  <div className="peachScorefont">My name is:</div>
  {/* avatar here */}
  <div className="peachScorefont">I am a {/* TODO: buttons here*/}</div> 
  <div className="peachScorefont"> The peach has been clicked { props.peachClickCount } times.</div>
  <div className="peachScorefont"> You have { props.achievements.length } achievements.</div>
  <div className="peachScorefont">Next achievement:  {/* {props.currentPeachStatus[props.aidx]} */}</div> 
   
  <h4 className="peachScorefont"> Achievements </h4>
  {/* { props.achievements.map(achievement => <ListItem achievement={achievement}/>)} */}
  </div>
)

export default Scoreboard;
