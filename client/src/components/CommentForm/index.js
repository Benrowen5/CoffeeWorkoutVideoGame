import React from 'react';

const CommentForm = () => {
  const handleChange = (event) => {
    // if (event.target.value.length <= 280) {
    //   setText(event.target.value);
    //   setCharacterCount(event.target.value.length);
    // }
  };

  // submit form
  const handleFormSubmit = async (event) => {
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
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
