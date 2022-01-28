import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

const GameList = () => {
    // //Test data
    // const [games] = useState([
    //     { _id: "5432", name: 'Skyrim', description: 'Open world medieval role playing game' },
    //     { _id: "4567", name: 'Mario Kart', description: 'Action packed racing game' },
    //     { _id: "9876", name: 'Soul Calliber', description: 'Button mashing fighter' },
    //     { _id: "1234", name: 'Animal Crossing', description: 'Cute farm animals' }
    // ]);

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
            <h3>
                Top Games of 2021:
            </h3>
            <ol>
                {gameData.map((game) => (
                    <li key={game.title}>
                        <Link to={'/game/' + game._id}>{game.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default GameList;
