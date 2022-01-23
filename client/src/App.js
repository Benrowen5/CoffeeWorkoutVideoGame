import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import GameList from './components/GameList';
import VideoGame from './components/VideoGame';
import Discussion from './components/Discussion';
import Footer from './components/Footer';

function App() {
  //Test data
  const [games] = useState([
    { name: 'Skyrim', description: 'Open world medieval role playing game' },
    { name: 'Mario Kart', description: 'Action packed racing game' },
    { name: 'Soul Calliber', description: 'Button mashing fighter' },
    { name: 'Animal Crossing', description: 'Cute farm animals' }
  ]);

  const [currentGame, setCurrentGame] = useState(games[0]);
  
  return (
    <div className="App">
      <Navigation></Navigation>
      <section className='flex-row'>
        <About></About>
        <GameList
          games={games}
          setCurrentGame={setCurrentGame}
          currentGame={currentGame}
        ></GameList>
        <VideoGame
          currentGame={currentGame}
        ></VideoGame>
        <Discussion></Discussion>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
