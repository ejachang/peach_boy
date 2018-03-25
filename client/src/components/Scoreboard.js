import React, {Component} from 'react';
import { connect } from 'react-redux';

import AchievementItem from './AchievementItem';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('scoreboard props', this.props);
    const achievement = this.props.achievements;
    const nextAchievement = this.props.nextAchievement;
    const clicks = this.props.clicks;
    const image = this.props.image;
    return (  
      <div>
        <div className="peachFont peachsbFont peachsb peachsbPosition">
          <div className="peachsbFont"> The peach has been clicked {clicks} times.</div>
          <div className="peachsbFont"> You have {achievement.length} achievements.</div>
          <div className="peachsbFont">Next achievement:  {nextAchievement}</div> 
          <h4 className="peachsFont peachsbSubtitle"> Achievements </h4>
          {/* { props.achievements.map(achievement => <ListItem achievement={achievement}/>)} */}
        </div>
        <div className='peachImageDiv'>
          <img src={ image } className='peachImage'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // console.log('redux state', reduxState);
  return {
    clicks: reduxState.scoreboardReducer.clicks,
    nextAchievement: reduxState.scoreboardReducer.nextAchievement,
    achievements: reduxState.scoreboardReducer.achievements,
    image: reduxState.scoreboardReducer.image
  };
};

// const mapDispatchToProps = (dispatch) => {
  
// };

export default connect(mapStateToProps)(Scoreboard);
