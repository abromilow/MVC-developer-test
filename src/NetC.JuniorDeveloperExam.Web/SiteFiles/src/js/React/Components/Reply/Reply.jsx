import React from 'react';
import formatDate from '../../../Utils/formatDate';

const Reply = ({ reply }) => {
  var replyNameParts = reply.Name.split(' ');
  var replyQueryString = replyNameParts.join('+');
  return (
    <div className='reply'>
      <img
        className='d-flex mr-3 rounded-circle user-avatar'
        src={`https://eu.ui-avatars.com/api/?name=${replyQueryString}`}
        alt={reply.Name}
      />
      <div className='media-body'>
        <h5 className='mt-0'>
          {reply.Name}{' '}
          <small>
            <em>({formatDate(reply.Date)})</em>
          </small>
        </h5>
        {reply.Message}
      </div>
    </div>
  );
};

export default Reply;
