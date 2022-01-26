import React, { useState } from 'react';

const GameList = (props) => {
    const { games = [],
        setCurrentGame,
        handlePageChange } = props;

    return (
        <div className='gameList'>
            <h3>
                Top Games of 2021:
            </h3>
            <ol>
                {games.map((game) => (
                    <li key={game.name}>
                        <a
                            href='#game'
                            onClick={() => {
                                setCurrentGame({ game });
                                handlePageChange('Game');
                            }}
                        >
                            {game.name}
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default GameList;
