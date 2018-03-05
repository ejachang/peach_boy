import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Title from './components/Title';
import Scoreboard from './components/Scoreboard';
import Comic from './components/Comic';
import PeachImage from './components/PeachImage';
import Profile from './components/Profile';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider>
    <Title/>
    <Scoreboard/>
    <PeachImage/>
    <Comic/>
    <Profile/>
  </Provider>, app
);
