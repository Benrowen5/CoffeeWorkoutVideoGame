import React, {useState, useEffect} from 'react';
import GameList from '../components/GameList';
import CommentForm from '../components/CommentForm';
import auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import styles from './SingleGame.module.css';
import Title from "../components/Title/Title";

const VideoGame = (props) => {
    const { id: gameId } = useParams();

    const [singleGameData, setSingleGameData] = useState([]);

    useEffect(()=>{
        api.getGame(gameId).then(res=>{
            
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            setSingleGameData(res.data)
        })
    }, [gameId]);

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
                        <CommentForm username={props.username} />
                    </>
                ) : (<></>)}
                                
                <div className='discussion'>
                    <h3>
                        Discussion:
                    </h3>
                    <ul>
                        {singleGameData.comments?.map((comment) => (
                            <li>
                                {comment.createdAt}
                                <div>
                                    {comment.commentBody}
                                    {comment.commentBy}
                                    {comment.replies?.map((reply) => (
                                        <div>
                                            <li>
                                                {reply.replyBody}
                                            </li>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <img className={styles.cover} src={'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157'} alt={'Cover'}/>
                <Title title={'God of War'}/>
                <p className={styles.desc}>His vengeance against the Gods of Olympus years behind him, Kratos now lives
                    as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he
                    must fight to survive… and teach his son to do the same.
                </p>
                <p className={styles.genre}>Action, Adventure, Mythology, Story-Rich</p>
                <div>
                    <button type="button" className={styles.favBtn}>Favorite</button>
                </div>
                <CommentForm username={props.username}/>
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;