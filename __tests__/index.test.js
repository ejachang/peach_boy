import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../client/src/store.js';
import App from '../client/src/components/App';

it('renders without crashing', () => {
  const app = document.createElement('app');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, app);
});

