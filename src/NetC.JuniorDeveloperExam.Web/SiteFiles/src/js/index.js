import React from 'react';
import ReactDOM from 'react-dom';
import App from './React/app';

const container = document.getElementById('main');

if (container) {
  ReactDOM.render(<App />, container);
}
