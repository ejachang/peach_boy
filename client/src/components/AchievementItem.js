import React from 'react';
import PropTypes from 'prop-types';

const AchievementItem = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
);

AchievementItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default AchievementItem;
