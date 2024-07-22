import { Stack, Rating } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import './Form.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useForm, Controller } from 'react-hook-form';

const Review = () => {
  const [submitted, setSubmitted] = useState(false);
  const { handleSubmit, control, register, setValue, formState: { errors } } = useForm();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (data) => {
    // Handle submission logic here
    setSubmitted(true);

    // Show comment in alert after submission
    alert(`Thank you for your submission!\n\nComment: ${data.comment}`);
  };

  return (
    <div className="popup">
      {!submitted && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>RATE US !</h1>
          <Stack spacing={2}>
            <Controller
              name="rating"
              control={control}
              defaultValue={0}
              render={({ field }) => <Rating {...field} />}
            />
          </Stack>

          <h1>LEAVE COMMENT</h1>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            {...register('userName', { required: 'Name is required' })}
          />
          <span className="error">{errors.userName && errors.userName.message}</span>
          <br /><br />

          <textarea
            type="text"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            className="input"
            ref={inputRef}
            {...register('comment', { required: 'Comment is required' })}
          ></textarea>
          <span className="error">{errors.comment && errors.comment.message}</span>
          <br />

          <button className="button" type="submit">
            SUBMIT
          </button>
        </form>
      )}

      {submitted && (
        <>
          <h1>VIEW COMMENT</h1>
          {/* Display submitted data */}
        </>
      )}
    </div>
  );
};

export default Review;
