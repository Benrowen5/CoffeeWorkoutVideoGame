import React from 'react';
import GameList from '../components/GameList';
import Discussion from '../components/Discussion';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';

const VideoGame = () => {
    const { id: gameId } = useParams();

    const games = [
        { _id: "5432", name: 'Skyrim', description: 'Open world medieval role playing game' },
        { _id: "4567", name: 'Mario Kart', description: 'Action packed racing game' },
        { _id: "9876", name: 'Soul Calliber', description: 'Button mashing fighter' },
        { _id: "1234", name: 'Animal Crossing', description: 'Cute farm animals' }
    ];

    console.log(gameId);
    let currentGame = games[0];

    for (let i = 0; i < games.length; i++) {
        console.log(games[i]._id);
        if (games[i]._id === gameId) {
            currentGame = games[i];
        }
    }

    return (
        <section className='flex-row'>
            <div className='game'>
                <h1>{currentGame.name}</h1>
                <p>{currentGame.description}</p>
                <CommentForm></CommentForm>
                <Discussion></Discussion>
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;