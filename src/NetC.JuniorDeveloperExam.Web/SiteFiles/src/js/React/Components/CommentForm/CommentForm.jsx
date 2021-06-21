import React, { useContext, useState } from 'react';
import useForm from '../../../Utils/useForm';
import CommentContext from '../Context/CommentContext';

const CommentForm = ({ blogId }) => {
  const [comments, setComments] = useContext(CommentContext);
  const [error, setError] = useState({});
  const { values, updateValue, clearValues } = useForm({
    Name: '',
    Email: '',
    Message: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    fetch('/blog/AddComment', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BlogId: blogId,
        ...values,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Error);
        if (data.ResponseCode == 200) {
          setComments(data.Comments);
          clearValues();
        } else if (data.ResponseCode == 555 || data.ResponseCode == 550) {
          setError({
            Code: data.ResponseCode,
            Message: data.Error,
          });
        }
      });
  };

  return (
    <div className='card my-4'>
      <h5 className='card-header'>Leave a Comment:</h5>
      {error.Message && (
        <h5 className='error'>
          {error.Code} - {error.Message}
        </h5>
      )}
      <div className='card-body'>
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
    </div>
  );
};

export default CommentForm;
