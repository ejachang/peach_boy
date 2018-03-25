import React, {Component} from 'react';
import { connect } from 'react-redux';

import AchievementItem from './AchievementItem';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('scoreboard props', this.props);
    const achievement = this.props;
    return (  <div className="peachFont peachsbFont peachsb peachsbPosition">
      <div className="peachsbFont"> The peach has been clicked 0 times.</div>
      <div className="peachsbFont"> You have 0 achievements.</div>
      <div className="peachsbFont">Next achievement:  {achievement[0]}</div> 
      <h4 className="peachsFont peachsbSubtitle"> Achievements </h4>
      {/* { props.achievements.map(achievement => <ListItem achievement={achievement}/>)} */}
    </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  console.log('redux state', reduxState);
  return {
    clicks: reduxState.scoreboardReducer.clicks,
    achivements: reduxState.scoreboardReducer.achivements
  };
};

// const mapDispatchToProps = (dispatch) => {
  
// };

export default connect(mapStateToProps)(Scoreboard);
