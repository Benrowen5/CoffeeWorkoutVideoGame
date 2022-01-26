import React, { useState } from 'react';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home';
import Store from './pages/Store';
import SingleGame from './pages/SingleGame';
import Dashboard from './pages/Dashboard'


function App() { 
  //Test data
  const [games] = useState([
    { _id: "5432", name: 'Skyrim', description: 'Open world medieval role playing game' },
    { _id: "4567", name: 'Mario Kart', description: 'Action packed racing game' },
    { _id: "9876", name: 'Soul Calliber', description: 'Button mashing fighter' },
    { _id: "1234", name: 'Animal Crossing', description: 'Cute farm animals' }
  ]);

  const [currentGame, setCurrentGame] = useState(games[0]);
  const [currentPage, handlePageChange] = useState('Home');

  function renderPage() {
    switch (currentPage) {
      case 'Homepage':
        return <Home 
          games={games}
          setCurrentGame={setCurrentGame}
          currentGame={currentGame}
          currentPage={currentPage}
          handlePageChange={handlePageChange} />;
      case 'Store':
        return <Store />;
      case 'My Dashboard':
        return <Dashboard />;
      case 'Game':
        return <SingleGame currentGame={currentGame}/>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        {/* Pass the state value and the setter as props to navTabs */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Call the renderPage function passing in the currentPage */}
      </nav>
      <div>{renderPage(currentPage)}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
