import React from 'react';
import About from '../components/About';
import GameList from '../components/GameList';

const Home = () => {

    return (
        <div className="App">
            <section className='flex-row'>
                <About></About>
                <GameList></GameList>
            </section>
        </div>
    );
}

export default Home;
