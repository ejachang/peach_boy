import React, {Component} from 'react';
import { connect } from 'react-redux';

import AchievementItem from './AchievementItem';
import { addAchievement, addClick, updateImage } from '../actions/scoreboardActions';


class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.handlePeachClick = this.handlePeachClick.bind(this);
  }

  handlePeachClick() {
    this.props.dispatch( addClick() );
    
    ((this.props.clicks + 1) % 5 === 0 && this.props.clicks > 0 && this.props.clicks < 84) ? 
      this.props.dispatch( addAchievement() ) 
      : null;
    
    ((this.props.clicks + 1) % 10 === 0 && this.props.clicks > 0 && this.props.clicks < 68) ?
      this.props.dispatch( updateImage() )
      : null;

  }

  render() {
    const achievements = this.props.achievements;
    const nextAchievement = this.props.nextAchievement;
    const clicks = this.props.clicks;
    const image = this.props.image;
    return (  
      <div>
        <div className="peachFont peachsbFont peachsb peachsbPosition">
          <div className="peachsbFont"> The peach has been clicked {clicks} times.</div>
          <div className="peachsbFont"> You have {achievements.length} achievements.</div>
          <div className="peachsbFont">Next achievement: {nextAchievement}</div> 
          <h4 className="peachsFont peachsbSubtitle"> Achievements </h4>
          { achievements.map(achievement => <AchievementItem achievement={achievement} key={achievement}/>)}
        </div>
        <div className='peachImageDiv'>
          <img src={ image } className='peachImage' onClick={this.handlePeachClick}/>
          <h5 className="peachFont peachSubtitle">click the peach to free him!</h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clicks: state.scoreboardReducer.clicks,
    nextAchievement: state.scoreboardReducer.nextAchievement,
    achievements: state.scoreboardReducer.achievements,
    image: state.scoreboardReducer.image
  };
};

// const mapDispatchToProps = (dispatch) => {
  
// };

export default connect(mapStateToProps)(Scoreboard);
