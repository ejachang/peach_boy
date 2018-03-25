import React, {Component} from 'react';
import { connect } from 'react-redux';

import Scoreboard from './Scoreboard';
import Comic from './Comic';
import PeachImage from './PeachImage';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [
        './img-ref/a-img/0-modal.png'
      ]
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
        />
        <Comic />
        <Profile />
        <PeachImage
          peachImages={this.state.image}
        />
      </div>
    );
  }
}

// const mapStateToProps = (reduxState) => {
//   // console.log('redux state', reduxState);
//   return {
    
//   };
// };

// export default connect(mapStateToProps)(App);

export default connect()(App);
