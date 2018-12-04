import React from 'react';
import AchievementItem from './AchievementItem';


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

const mapStateToProps = (reduxState) => {
  return {
    clicks: reduxState.scoreboardReducer.clicks,
    nextAchievement: reduxState.scoreboardReducer.nextAchievement,
    achievements: reduxState.scoreboardReducer.achievements,
    image: reduxState.scoreboardReducer.image
  };

};

export default Scoreboard;
