import React, { useContext, useEffect } from 'react';
import CommentList from './Components/CommentList/CommentList';
import CommentForm from './Components/CommentForm/CommentForm';
import CommentContext from './Components/Context/CommentContext';

const App = ({ blogId }) => {
  const [comments, setComments] = useContext(CommentContext);

  useEffect(() => {
    fetch(`/Blog/GetCommentsByBlogId/${blogId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  if (!comments.length) {
    return (
      <>
        <h1>No comments for this blog</h1>
        <CommentForm blogId={blogId} />
      </>
    );
  }

  return (
    <>
      <CommentList blogId={blogId} comments={comments} />
      <CommentForm blogId={blogId} />
    </>
  );
};

export default App;
