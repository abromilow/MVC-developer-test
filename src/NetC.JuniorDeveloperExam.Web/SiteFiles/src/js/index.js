import React from 'react';
import ReactDOM from 'react-dom';
import App from './React/App';
import { CommentProvider } from './React/Components/Context/CommentContext';

const container = document.getElementById('main');
const blogId = container.dataset.blogId;
const root = (
  <CommentProvider>
    <App blogId={blogId} />
  </CommentProvider>
);

if (container) {
  ReactDOM.render(root, container);
}
