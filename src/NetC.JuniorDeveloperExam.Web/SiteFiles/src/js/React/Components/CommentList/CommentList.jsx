import React from 'react';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

const CommentList = ({ comments, blogId }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.Id} blogId={blogId} comment={comment} />
      ))}

      <CommentForm blogId={blogId} />
    </>
  );
};

export default CommentList;
