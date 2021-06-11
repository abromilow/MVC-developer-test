const updateComments = (comments, reply) => {
  console.log(reply.CommentId);
  comments.forEach((c) => {
    if (c.Id == reply.CommentId) {
      if (c.Replies) {
        c.Replies.push({
          Id: c.Replies.length + 1,
          Date: new Date(),
          Name: reply.Name,
          Email: reply.Email,
          Message: reply.Message,
        });
      } else {
        c.Replies = [
          {
            Id: 1,
            Date: new Date(),
            Name: reply.Name,
            Email: reply.Email,
            Message: reply.Message,
          },
        ];
      }
      console.log(c);
    }
  });

  return comments;
};

export default updateComments;
