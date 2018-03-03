import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Scoreboard from './components/Scoreboard.jsx';
import Comic from './components/Comic.jsx';
import PeachImage from './components/PeachImage.jsx';
import Profile from './components/Profile.jsx';
// import fakeDBS from './fakeDropboxStorage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: {
        'boy': null,
        'girl': null,
        'grill': null,
      },
      selected: 'girl',
      clicks: 0,
      achievements: [],
    };
  }
  
  render() {
    return (<div>
      <div className="peachHeader">
        <h1 className="peachFont peachTitle">Son of a Peach</h1>
        <h5 className="peachFont peachSubtitle">click the peach to free him!</h5>
      </div>
      <Scoreboard
        peachClickCount={this.state.clicks}
        achievements={this.state.achievements}
      />
      <PeachImage/>
      <Comic/>
      <Profile/>
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
