import React, { useContext, useState } from 'react';
import ReplyContext from '../Context/ReplyContext';
import Reply from '../Reply/Reply';
import ReplyForm from '../ReplyForm/ReplyForm';
import { ReplyBlockStyles } from './ReplyBlock.styles';

const ReplyBlock = ({ blogId, commentId, replies }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showForm, setShowForm] = useContext(ReplyContext);
  const ToggleReplies = (e, toggle) => {
    e.preventDefault();

    setShowReplies(toggle);
  };

  const ToggleReplyForm = (e, toggle) => {
    e.preventDefault();
    setShowForm(toggle);
  };

  return (
    <>
      <ReplyBlockStyles.BlockStyles className='reply-block'>
        <ReplyBlockStyles.LinkBannerStyles className='link-banner'>
          {!showForm && (
            <ReplyBlockStyles.LinkStyles
              href=''
              onClick={(e) => ToggleReplyForm(e, true)}>
              Reply To Comment
            </ReplyBlockStyles.LinkStyles>
          )}
          {showForm && (
            <ReplyBlockStyles.LinkStyles
              href=''
              onClick={(e) => ToggleReplyForm(e, false)}>
              Cancel reply
            </ReplyBlockStyles.LinkStyles>
          )}
          {replies && (
            <>
              <ReplyBlockStyles.ShowRepliesLinkStyles
                showReplies={showReplies}
                href=''
                onClick={(e) => ToggleReplies(e, true)}>
                Show Replies ({replies.length})
              </ReplyBlockStyles.ShowRepliesLinkStyles>
              <ReplyBlockStyles.HideRepliesLinkStyles
                showReplies={showReplies}
                href=''
                onClick={(e) => ToggleReplies(e, false)}>
                Hide Replies
              </ReplyBlockStyles.HideRepliesLinkStyles>
            </>
          )}
        </ReplyBlockStyles.LinkBannerStyles>

        {replies && showReplies && (
          <div className='replies'>
            {replies.map((reply) => (
              <Reply key={`${blogId}-${reply.Id}`} reply={reply} />
            ))}
          </div>
        )}

        {showForm && (
          <ReplyForm
            blogId={blogId}
            commentId={commentId}
            toggleShowForm={ToggleReplyForm}
          />
        )}
      </ReplyBlockStyles.BlockStyles>
    </>
  );
};

export default ReplyBlock;
