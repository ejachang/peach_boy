import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Comic from './components/Comic';
import PeachImage from './components/PeachImage';
import Profile from './components/Profile';
// import fakeDBS from './fakeDropboxStorage.js';

const app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Header />
    <Scoreboard />
    <PeachImage />
    <Comic />
    <Profile />
  </div>, app
);
