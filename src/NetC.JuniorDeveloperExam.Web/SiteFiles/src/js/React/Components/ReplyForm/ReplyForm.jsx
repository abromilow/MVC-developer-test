import React, { useContext, useState } from 'react';
import updateComments from '../../../Utils/updateComments';
import useForm from '../../../Utils/useForm';
import CommentContext from '../Context/CommentContext';

const ReplyForm = ({ blogId, commentId }) => {
  const [comments, setComments] = useContext(CommentContext);
  const { values, updateValue } = useForm({
    Name: '',
    Email: '',
    Message: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    fetch('/blog/AddReply', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BlogId: blogId,
        CommentId: commentId,
        ...values,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ResponseCode == 200) {
          const newComments = updateComments(comments, data.Reply);
        }
      });
  };

  return (
    <div className='reply-form'>
      <form onSubmit={(e) => submitForm(e)}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='Name'>Name:</label>
            <input
              className='form-control'
              required
              placeholder='Name'
              type='text'
              name='Name'
              id='Name'
              value={values.Name}
              onChange={updateValue}
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='Email'>Email Address</label>
            <input
              className='form-control'
              required
              type='email'
              name='Email'
              id='Email'
              value={values.Email}
              onChange={updateValue}
            />
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='Message'></label>
          <textarea
            required
            className='form-control'
            name='Message'
            id='Message'
            rows='5'
            value={values.Message}
            onChange={updateValue}></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReplyForm;
