import React from 'react';
import Comment from '../Comment/Comment';

const CommentList = ({ comments, blogId }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.Id} blogId={blogId} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
