import React, { useState, useEffect } from 'react';
import About from '../components/About';
import TopGames from '../components/TopGames';

const Home = () => {
    return (
        <div>
            <About/>
            <GameList/>
        </div>
    );
}

export default Home;
