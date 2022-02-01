import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import Moment from 'moment';
import styles from './CommentForm.module.css';

// REPLY STRETCHGOAL
const CommentForm = (props) => {
  const { id: gameId } = useParams();
  const [commentText, setText] = useState({commentBody: '', commentBy: props.username});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setText({
      ...commentText,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(commentText);
      const response = await api.addComment(gameId, commentText);
      
      if (response.status < 200 || response.status > 299 ) {
        throw new Error('something went wrong!');
      }
    } catch (e) {
      console.error(e);
    }
    setText({
      commentBody: '',
      commentBy: props.username
  });
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleFormSubmit}
      >
        <textarea
          name='commentBody'
          id='commentBody'
          placeholder="comment..."
          value={commentText.commentBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
