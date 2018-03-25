import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
// import reducerIndex from './reducers/reducerIndex';

import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Comic from './components/Comic';
import PeachImage from './components/PeachImage';
import Profile from './components/Profile';

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
      avatar: './img-ref/avatar-girl.png',
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

const app = document.getElementById('app');

render (
  <Provider store={store}>
    <App />
  </Provider>, app
);

// For tests
// export default App;