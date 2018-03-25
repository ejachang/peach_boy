import React, {Component} from 'react';
import { connect } from 'react-redux';

import Scoreboard from './Scoreboard';
import Comic from './Comic';
import PeachImage from './PeachImage';
import Profile from './Profile';

import { changeGirl, changeBoy, changeGrill } from '../actions/profileActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      achievements: [
        'Just Peachy!',
      ],
      image: [
        './img-ref/a-img/0-modal.png'
      ]
    };
    
  }
  handleNameSubmit(e) {

  }

  handleAvatarChange(e) {
    if (e.target.id === 'CHANGE_GIRL') {
      this.props.dispatch({ changeGirl });
    } else if (e.target.id === 'CHANGE_BOY') {
      this.props.dispatch({ changeBoy });
    } else if (e.target.id === 'CHANGE_GRILL') {
      this.props.dispatch({ changeGrill });
    }
  }
  render() {
    // console.log('props test', this.props);
    let avatar = this.props.avatar;
    return (
      <div>
        <div className="peachHeader">
          <div className="peachSide">
            <h1 className="peachFont peachTitle">Son of a Peach</h1>
          </div>
          <div className="peachSide">
          </div>
          <h5 className="peachFont peachSubtitle">click the peach to free him!</h5>
        </div>
        <Scoreboard
          peachClickCount={this.state.clicks}
          achievements={this.state.achievements}
        />
        <Comic/>
        <Profile
          peachAvatar={avatar}
          // handleNameSubmit={this.handleNameSubmit}
          // handleAvatarChange={this.handleAvatarChange}
        />
        <PeachImage
          peachImages={this.state.image}
        />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // console.log('redux state', reduxState);
  return {
    avatar: reduxState.profileReducer.avatar
  };
};

export default connect(mapStateToProps)(App);
