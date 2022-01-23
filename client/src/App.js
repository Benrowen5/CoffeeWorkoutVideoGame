import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  //temporary test data
  const [games] = useState([
    {
      name: 'Skyrim',
      description: 'Open world medieval role playing game',
    },
    { name: 'Mario Kart', description: 'Action packed racing game' },
    { name: 'Soul Calliber', description: 'Button mashing fighter' },
    { name: 'Animal Crossing', description: 'Cute farm animals' }
  ]);

  const [currentGame, setCurrentGame] = useState();
  
  return (
    <div className="App">
      <Navigation
        games={games}
        setCurrentGame={setCurrentGame}
        currentGame={currentGame}
      ></Navigation>
      <h3>
        Main content goes here
      </h3>
      <Footer></Footer>
    </div>
  );
}

export default App;
