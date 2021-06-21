import React from 'react';
import ReactDOM from 'react-dom';
import App from './React/App';
import { CommentProvider } from './React/Components/Context/CommentContext';
import { ReplyProvider } from './React/Components/Context/ReplyContext';

const container = document.getElementById('main');
const blogId = container.dataset.blogId;
const root = (
  <CommentProvider>
    <ReplyProvider>
      <App blogId={blogId} />
    </ReplyProvider>
  </CommentProvider>
);

if (container) {
  ReactDOM.render(root, container);
}
