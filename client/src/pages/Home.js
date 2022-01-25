import React, { useState } from 'react';
import About from '../components/About';
import GameList from '../components/GameList';
import SingleGame from './SingleGame';

const Home = () => {
    //Test data
    const [games] = useState([
        { _id: "5432", name: 'Skyrim', description: 'Open world medieval role playing game' },
        { _id: "4567", name: 'Mario Kart', description: 'Action packed racing game' },
        { _id: "9876", name: 'Soul Calliber', description: 'Button mashing fighter' },
        { _id: "1234", name: 'Animal Crossing', description: 'Cute farm animals' }
    ]);

    const [currentGame, setCurrentGame] = useState(games[0]);

    return (
        <div className="App">
            <section className='flex-row'>
                <About></About>
                <GameList
                    games={games}
                    setCurrentGame={setCurrentGame}
                    currentGame={currentGame}
                ></GameList>
                <SingleGame
                    currentGame={currentGame}
                ></SingleGame>
            </section>
        </div>
    );
}

export default Home;
