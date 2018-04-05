import React, {Component} from 'react';
import { connect } from 'react-redux';

import Scoreboard from './Scoreboard';
import Header from './Header';
// import Comic from './Comic';
// import PeachImage from './PeachImage';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Scoreboard
        />
        {/* <Comic /> */}
        <Profile />
        {/* <PeachImage /> */}
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
