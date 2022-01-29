import React, {useState, useEffect} from 'react';
import GameList from '../components/GameList';
import Discussion from '../components/Discussion';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

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
    },[gameId]);

    return (
        <section className='flex-row'>
            <div className='game'>
                <h1>{singleGameData.title}</h1>
                <h3>{singleGameData.genre}</h3>
                <p>{singleGameData.description}</p>
                <img src={singleGameData.image} alt={singleGameData.title} style={{height: "250px"}}/>
                <div>
                    <button type="button" class="fav-btn">Favorite</button>
                </div>
                <CommentForm username={props.username}/>
                <Discussion username={props.username}/>
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;