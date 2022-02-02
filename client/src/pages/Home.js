import React, { useState, useEffect } from 'react';
import About from '../components/About';
import GameList from '../components/GameList';
import TopGames from '../components/TopGames';
import styles from '../pages/Dashboard.module.css'

const Home = () => {
    return (
        <div>
            <section className="homepage-container">
                <About className="about"/>
                <GameList className="game-list"/>
            </section>
            <section className="homepage-container2">
                <TopGames />
            </section>
        </div>
    );
}

export default Home;
