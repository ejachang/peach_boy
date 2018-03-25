import React, {Component} from 'react';

import Scoreboard from './Scoreboard';
import Comic from './Comic';
import PeachImage from './PeachImage';
import Profile from './Profile';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      clicks: 0,
      achievements: [
        'Just Peachy!',
      ],
      image: [
        './img-ref/a-img/0-modal.png'
      ],
      // avatar: './img-ref/avatar-girl.png',
    };
  }
  render() {
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
          peachAvatar={this.state.avatar}
        />
        <PeachImage
          peachImages={this.state.image}
        />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState);
};

export default connect(mapStateToProps)(App);
