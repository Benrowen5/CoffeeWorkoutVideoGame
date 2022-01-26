import React from 'react';
import Discussion from '../components/Discussion';

function VideoGame(props) {
    const { currentGame } = props;
    return (
        <section className='game'>
            <h1>{currentGame.name}</h1>
            <p>{currentGame.description}</p>
            <Discussion></Discussion>
        </section>
    );
}

export default VideoGame;