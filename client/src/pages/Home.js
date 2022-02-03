import React from 'react';
import GameList from '../components/GameList';
import TopGames from '../components/TopGames';

const Home = () => {
    return (
        <section className='flex-row'>
            <div className='left-side'>
                <h1 className='title'>About Vapor</h1>
                <p style={{fontSize: "18px"}}>
                Welcome to Vapor. We seek to bring modern functionality and accessibility to an all-in-one gaming service. 
                Our application allows users to browse video games of all types and genres, view detailed information about each of them, start conversations with fellow app users, and favorite games so that each user can have quick reference and access to their favorites from their dashboard. 
                We even have some sweet swag available for purchase in our store so check it out!
                </p>
                <TopGames />               
            </div>
            <GameList/>
        </section>
    );
}

export default Home;
