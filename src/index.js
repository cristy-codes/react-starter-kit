import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/root';
import './styles/main.scss';

const render = () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
};

// Enable Webpack hot module replacement
if (module.hot) {
  module.hot.accept('./app/root', () => {
    render();
  });

  window.addEventListener('message', (e) => {
    if (process.env.NODE_ENV !== 'production' && e.data && e.data.type === 'webpackInvalid') {
      // eslint-disable-next-line
      console.clear();
    }
  });
}

render();
