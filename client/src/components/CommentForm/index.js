import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { addComment } from '../../utils/api';

const CommentForm = () => {
  const { id: gameId } = useParams();
  const [commentText, setText] = useState('');

  const handleChange = (event) => {
      setText(event.target.value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // await addComment({
      //   variables: { commentText },
      // });

      // clear form value
      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        className="flex-row"
        // onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="comment..."
          //value={commentText}
          className="form-input col-12 col-md-9"
          //onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
