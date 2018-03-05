import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';
import Comic from './components/Comic';
import PeachImage from './components/PeachImage';
import Profile from './components/Profile';


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    {/* <Title/> */}
    <Scoreboard/>
    {/* <PeachImage/> */}
    {/* <Comic/> */}
    {/* <Profile/> */}
  </Provider>, app
  
);
//OLD
// ReactDOM.render(
//   <div>
//     <div className="peachHeader">
//       <h1 className="peachFont peachTitle">Son of a Peach</h1>
//       <h5 className="peachFont peachSubtitle">click the peach to free him!</h5>
//     </div>
//     <Scoreboard/>
//     <PeachImage/>
//     <Comic/>
//     <Profile/>
//   </div>, app
// );