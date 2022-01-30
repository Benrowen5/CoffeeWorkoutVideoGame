import React, { useState, useEffect } from 'react';
import GameList from '../components/GameList';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

const VideoGame = (props) => {
    const { id: gameId } = useParams();

    const [singleGameData, setSingleGameData] = useState([]);

    useEffect(() => {
        api.getGame(gameId).then(res => {

            if (res.status < 200 || res.status > 299) {
                throw new Error('something went wrong!');
            }
            setSingleGameData(res.data)
        })
    }, [gameId]);

    function favoriteGame() {
        try {
            const response = api.addFavorite(props.id, gameId);
            
            if (response.status < 200 || response.status > 299 ) {
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
                <div>
                    <button type="button" className="fav-btn" onClick={favoriteGame}>Favorite</button>
                </div>
                <CommentForm username={props.username} />
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
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;