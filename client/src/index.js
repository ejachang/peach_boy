import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
// import reducerIndex from './reducers/index';

import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Comic from './components/Comic';
import PeachImage from './components/PeachImage';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      clicks: 0,
      achievements: [
        'Just Peachy!',
        'Aren\'t you a peach',
        'I appeachiate you!',
        'Peach for the stars!',
        'You only peach once',
        'You want a peach of me???',
        'You\'ve got a peach of my heart',
        'Peach, don\'t kill my vibe',
        'My life is a peach of sheeps',
        'I\'ve got 99 problems but a peach ain\'t one',
        'Practice what you peach',
        'Impeachable',
        'Touch the Peach Award',
        'Aren\'t you peached yet',
        'Peach me I\'m dreaming',
        'Peach better have my money',
        'No more peaches!'
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
  <App />, app
);

// render (
//   <Provider store={store}>
//     <App />,
//   </Provider>, app

// );