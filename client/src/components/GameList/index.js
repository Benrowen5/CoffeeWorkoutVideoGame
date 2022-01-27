import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GameList = () => {
    //Test data
    const [games] = useState([
        { _id: "5432", name: 'Skyrim', description: 'Open world medieval role playing game' },
        { _id: "4567", name: 'Mario Kart', description: 'Action packed racing game' },
        { _id: "9876", name: 'Soul Calliber', description: 'Button mashing fighter' },
        { _id: "1234", name: 'Animal Crossing', description: 'Cute farm animals' }
    ]);

    return (
        <div className='gameList'>
            <h3>
                Top Games of 2021:
            </h3>
            <ol>
                {games.map((game) => (
                    <li key={game.name}>
                        <Link to={'/game/' + game._id}>{game.name}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default GameList;
