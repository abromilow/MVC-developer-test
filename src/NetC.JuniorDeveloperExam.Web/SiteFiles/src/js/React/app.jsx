import React, { useContext, useEffect } from 'react';
import CommentList from './Components/CommentList/CommentList';
import CommentContext from './Components/Context/CommentContext';

const App = ({ blogId }) => {
  const [comments, setComments] = useContext(CommentContext);

  useEffect(() => {
    fetch(`/Blog/GetCommentsByBlogId/${blogId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  if (!comments.length) {
    return <h1>Loading...</h1>;
  }

  return <CommentList blogId={blogId} comments={comments} />;
};

export default App;
