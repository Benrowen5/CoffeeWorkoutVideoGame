import React from 'react';
import About from '../components/About';
import GameList from '../components/GameList';

const Home = (props) => {

    console.log(props.games);
    return (
        <div className="App">
            <section className='flex-row'>
                <About></About>
                <GameList
                    games={props.games}
                    setCurrentGame={props.setCurrentGame}
                    handlePageChange={props.handlePageChange}
                ></GameList>
            </section>
        </div>
    );
}

export default Home;
