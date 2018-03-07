import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Comic from './components/Comic';
import PeachImage from './components/PeachImage';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: {
        'boy': null,
        'girl': null,
        'grill': null,
      },
      selected: '',
      clicks: 0,
      achievements: [],
      image: [],
    };
  }
  
  render() {
    return (
      <div>
        <Header />
        <Scoreboard
          peachClickCount={this.state.clicks}
          achievements={this.state.achievements}
        />
        <PeachImage/>
        <Comic/>
        <Profile/>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(
  <App />, app
);
