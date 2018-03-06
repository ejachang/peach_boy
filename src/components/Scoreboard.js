import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AchievementItem from './AchievementItem';
import { addAchievement } from '../actions/achievementActions';

const Scoreboard = ({ achievements, onAchievementClick }) => (
  <div className="peachFont peachsbFont peachsb peachsbPosition">
    <div className="peachsbFont"> The peach has been clicked 0 times.</div>
    <div className="peachsbFont"> You have 0 achievements.</div>
    <div className="peachsbFont">Next achievement: {text}</div> 
   
    <h4 className="peachsFont peachsbSubtitle"> Achievements </h4>
    <ul>
      {AchievementItem.map(achievement => (
        <AchievementItem key={achievement.text} {...achievement} onClick={() => onAchievementClick(achievement.text)} />
      ))}
    </ul>
    
  </div>
);


export default Scoreboard;
