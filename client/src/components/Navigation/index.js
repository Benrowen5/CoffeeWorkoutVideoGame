import React, { useEffect } from 'react';

function Navigation(props) {
  const {
    games = [],
    setCurrentGame,
    currentGame
  } = props;

  return (
    <header className="nav flex-row">
      <h1>
        <a data-testid="link" href="/">
          #CoffeeWorkoutVideoGame
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#homepage">
              Homepage
            </a>
          </li>
          <li>
            <a href="#store">
              Store
            </a>
          </li>
          <li>
            <a href="#dashboard">
              My Dashboard
            </a>
          </li>
          {games.map((game) => (
            <li>
              <a href={`#${game.name}`}>
                  {game.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
