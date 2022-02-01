import React, {useState, useEffect} from 'react';
import GameList from '../components/GameList';
// import CommentForm from '../components/CommentForm';
import auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import moment from 'moment';
import styles from './SingleGame.module.css';
import Title from "../components/Title/Title";

const VideoGame = (props) => {
    const { id: gameId } = useParams();
    const [singleGameData, setSingleGameData] = useState([]);
    const [commentText, setText] = useState({commentBody: '', commentBy: props.username});
    
    const handleCommentChange = (event) => {
        const { name, value } = event.target;
        setText({
        ...commentText,
        [name]: value,
        });
    };

    useEffect(()=>{
        api.getGame(gameId).then(res=>{
            
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            setSingleGameData(res.data)
        })
    }, [gameId, commentText]);

    function favoriteGame() {
        try {
            const response = api.addFavorite(props.id, gameId);

            if (response.status < 200 || response.status > 299) {
                throw new Error('something went wrong!');
            }
        } catch (e) {
            console.error(e);
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
        //   console.log(commentText);
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
        }
        );
    };

    const formatDate = (time) => {
    
    }

    return (
        <section className='flex-row'>
            <div className='game'>
                <h1>{singleGameData.title}</h1>
                <h3>{singleGameData.genre}</h3>
                <p>{singleGameData.description}</p>
                <img src={singleGameData.image} alt={singleGameData.title} style={{ height: "250px" }} />

                {auth.loggedIn() ? (
                    <>
                        <div>
                            <button type="button" className="fav-btn" onClick={favoriteGame}>Favorite</button>
                        </div>
                        <form
                        className="flex-row"
                        onSubmit={handleFormSubmit}
                        >
                            <textarea
                                name='commentBody'
                                id='commentBody'
                                placeholder="comment..."
                                value={commentText.commentBody}
                                className="form-input col-12 col-md-9"
                                onChange={handleCommentChange}
                            ></textarea>
                            <button className="btn col-12 col-md-3" type="submit">
                                Submit
                            </button>
                        </form>
                    </>
                ) : (<></>)}
                                
                <div className='discussion'>
                    <h3>
                        Discussion:
                    </h3>
                    <ul>
                        {singleGameData.comments?.slice(0).reverse().map((comment) => (
                            <li key={comment._id} className="comment">
                                {moment(comment.createdAt).format('MMM Do YYYY, h:mm:ss a')}
                                <div>
                                    {comment.commentBody} <br/>
                                    {comment.commentBy}
                                    {comment.replies?.map((reply) => (
                                        <div>
                                            <li key={reply} className="reply">
                                                {reply.replyBody}
                                            </li>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;