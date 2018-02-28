import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div id="peachText">
    <p></p>
    The peach has been clicked { props.peachClickCount } times.
    <p></p>
    You have { props.achievements.length } achievements.
    <p></p>
    Next achievement: {props.currentPeachStatus[props.aidx]}
    <h4> Achievements </h4>
      { props.achievements.map(achievement => <ListItem achievement={achievement}/>)}
  </div>
)

export default List;
