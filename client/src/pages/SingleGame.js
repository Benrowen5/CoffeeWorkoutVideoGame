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
            let favedIds = [];
            // console.log(res.data.favorites);
            res.data.favorites.map((faveGames)=>{
                favedIds.push(faveGames._id);
            })
            // console.log(favedIds);
            let hide = favedIds.includes(gameId)
            // console.log(hide);
            setHidden(hide);
        })
    }, [hidden])

    function favoriteGame() {
        try {
            const response = api.addFavorite(props.id, gameId);

            if (response.status < 200 || response.status > 299) {
                throw new Error('something went wrong!');
            }
            setHidden(true)
        } catch (e) {
            console.error(e);
        }
    }

    function removeGame() {
        try {
            const response = api.deleteFavorite(props.id, gameId);
            // console.log(props.id, gameId);
            if (response.status < 200 || response.status > 299) {
                throw new Error('something went wrong!');
            }
            setHidden(false)
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
                <h3>{singleGameData.genre}</h3>
                <div className= {styles.desc}>
                    <p className= {styles.p}>{singleGameData.description}</p>
                </div>
                <img className="single-game-image" src={singleGameData.image} alt={singleGameData.title} />
                {auth.loggedIn() ? (
                    <>
                        {hidden ? (
                            <>    
                            <div className='deleteFave'>
                                <button type="button" className={styles.favBtn} onClick={() => removeGame()}>Remove From Favorites</button>
                            </div>
                            </>) : (
                            <>
                            <div>
                                <button type="button" className={styles.favBtn} onClick={favoriteGame}>Favorite</button>
                            </div>
                            </>
                            )
                        }
                        <form
                        className= {styles.comment}
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
                            <div>
                                <button className={styles.submit} type="submit">
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
                                {moment(comment.createdAt).format('MMM D, YYYY  h:mm a')}
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