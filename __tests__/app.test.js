import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../client/src/store.js';
import renderer from 'react-test-renderer';

import App from '../client/src/components/App';
import Scoreboard from '../client/src/components/Scoreboard';
// import Comic from './Comic';
// import PeachImage from './PeachImage';
import Profile from '../client/src/components/Profile';

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('renders components without crashing', () => {
  const component = renderer.create(
    <div>
      <Scoreboard />
      <Profile />
    </div>
  );
  let example = component.toJSON();
  expect(example).toMatchSnapshot();
  return (
    <div>
      <Scoreboard />
      <Profile />
    </div>
  );

});

