import React, { useState, useEffect } from 'react';
import About from '../components/About';
import TopGames from '../components/TopGames';

const Home = () => {
    return (
        <div className="App">
            <section className='flex-row'>
                <About></About>
                <TopGames />
            </section>
            
        </div>
    );
}

export default Home;
