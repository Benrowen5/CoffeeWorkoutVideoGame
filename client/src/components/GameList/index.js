import React from 'react';

const GameList = (props) => {
    const {
        games = [],
        setCurrentGame,
        currentGame
    } = props;

    return (
        <div className='gameList'>
            <h3>
                Top Games of 2021:
            </h3>
            <ol>
            {games.map((game) => (
                <li>
                    <a href={`#${game.name}`} onClick={() => {
                        setCurrentGame(game);
                    }}>
                        {game.name}
                    </a>
                </li>
            ))}
            </ol>
        </div>
    );
};

export default GameList;
