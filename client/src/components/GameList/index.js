import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

const GameList = () => {
    const [gameData, setGameData] = useState([]);
    useEffect(()=>{
        api.getAllGames().then(res=>{
            
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            setGameData(res.data)
        })
        
    },[]);

    return (
        <div className='gameList'>
            <h1 className='title'>Top Games of 2021:</h1>
            
            <ol>
                {gameData.map((game) => (
                    <li style={{fontSize: "18px", padding: "2px 10px"}} key={game.title}>
                        <Link to={'/game/' + game._id}>{game.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default GameList;
