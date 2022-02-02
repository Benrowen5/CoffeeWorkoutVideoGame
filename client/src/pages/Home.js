import React, { useState, useEffect } from 'react';
import About from '../components/About';
import GameList from '../components/GameList';
<<<<<<< Updated upstream
import TopGames from '../components/TopGames';
=======
import styles from '../pages/Dashboard.module.css'
>>>>>>> Stashed changes

const Home = () => {
    return (
        <div>
            <About/>
            <TopGames />
            <GameList/>
        </div>
    );
}

export default Home;
