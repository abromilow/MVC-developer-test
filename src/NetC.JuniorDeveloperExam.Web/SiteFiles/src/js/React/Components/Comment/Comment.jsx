import React from 'react';
import formatDate from '../../../Utils/formatDate';
import ReplyBlock from '../ReplyBlock/ReplyBlock';

const Comment = ({ comment, blogId }) => {
  const nameParts = comment.Name.split(' ');
  const queryString = nameParts.join('+');
  return (
    <div className='comment-block'>
      <div className='media mb-4 comment'>
        <img
          className='d-flex mr-3 rounded-circle user-avatar'
          src={`https://eu.ui-avatars.com/api/?name=${queryString}`}
          alt={comment.Name}
        />
        <div className='media-body'>
          <h5 className='mt-0'>
            {comment.Name}
            <small>
              <em>({formatDate(comment.Date)})</em>
            </small>
          </h5>
          {comment.Message}
        </div>
      </div>
      <ReplyBlock
        blogId={blogId}
        commentId={comment.Id}
        replies={comment.Replies}
      />
    </div>
  );
};

export default Comment;
