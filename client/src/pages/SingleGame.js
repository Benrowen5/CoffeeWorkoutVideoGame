import React, {useState, useEffect} from 'react';
import GameList from '../components/GameList';
import Discussion from '../components/Discussion';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

const VideoGame = () => {
    const { id: gameId } = useParams();

    const [gameData, setGameData] = useState([]);
    useEffect(()=>{
        api.getAllGames().then(res=>{
            
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            setGameData(res.data)
        })
        
    },[]);

    let currentGame = gameData[0];

    for (let i = 0; i < gameData.length; i++) {
        console.log(gameData[i]._id);
        if (gameData[i]._id === gameId) {
            currentGame = gameData[i];
            console.log(currentGame);
        }
    }

    return (
        <section className='flex-row'>
            <div className='game'>
                <h1>{currentGame.title}</h1>
                <h3>{currentGame.genre}</h3>
                <p>{currentGame.description}</p>
                <img src={currentGame.image} alt={currentGame.title} style={{height: "250px"}}/>
                <CommentForm></CommentForm>
                <Discussion></Discussion>
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;