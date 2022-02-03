import React, {useState, useEffect} from 'react';
import GameList from '../components/GameList';
// import CommentForm from '../components/CommentForm';
import auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import moment from 'moment';
import styles from './SingleGame.module.css';

const VideoGame = (props) => {
    const { id: gameId } = useParams();
    const [singleGameData, setSingleGameData] = useState([]);
    const [commentText, setText] = useState({commentBody: '', commentBy: props.username});
    const [hidden, setHidden] = useState(true);

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

    useEffect(()=>{
        api.getUser(props.id).then(res=>{
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            // console.log(res.data.favorites);
        })
    }, [])

    function favoriteGame() {
        try {
            const response = api.addFavorite(props.id, gameId);

            if (response.status < 200 || response.status > 299) {
                throw new Error('something went wrong!');
            }
            setHidden(false)
        } catch (e) {
            console.error(e);
        }
    }

    function removeGame(gameId) {
        try {
            const response = api.deleteFavorite(props.id, gameId);
            console.log(props.id, gameId);
            if (response.status < 200 || response.status > 299) {
                throw new Error('something went wrong!');
            }
            setHidden(true)
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

   

    return (
        <section className='flex-row'>
            <div className='left-side' style={{textAlign: "center"}}>
                <h1 className='title'>{singleGameData.title}</h1>
                <img className="single-game-image" src={singleGameData.image} alt={singleGameData.title} />
                <h3>{singleGameData.genre}</h3>
                <div className= {styles.desc}>
                    <p className= {styles.p}>{singleGameData.description}</p>
                </div>
                
                {auth.loggedIn() ? (
                    <>
                        {hidden ? (
                            <>    
                            <div>
                                <button type="button" className={styles.favBtn} onClick={favoriteGame}>Favorite</button>
                            </div></>) : (
                            <>
                            <div className='deleteFave'>
                                <button type="button" className={styles.favBtn} onClick={() => removeGame(singleGameData._id)}>Remove From Favorites</button>
                            </div>
                            </>
                            )
                        }
                            <form
                            className="comment-form"
                            onSubmit={handleFormSubmit}
                            >
                                <div className="textarea-wrapper"><br></br>
                                    <textarea
                                        name='commentBody'
                                        id='commentBody'
                                        placeholder="comment..."
                                        value={commentText.commentBody}
                                        className="comment-area"
                                        // rows="10" cols="40"
                                        onChange={handleCommentChange}
                                    ></textarea>
                                </div>
                                <div>
                                    <button className="favBtn" type="submit">
                                    Submit
                                    </button>
                                </div>
                                
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
                                {comment.commentBy} on 
                                {moment(comment.createdAt).format(' MMM Do YYYY, h:mm:ss a')}
                                <div className="comment-body">
                                    {comment.commentBody} <br/>
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