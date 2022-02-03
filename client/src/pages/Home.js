import React from 'react';
import GameList from '../components/GameList';
import TopGames from '../components/TopGames';

const Home = () => {
    return (
        <div className='flex-row'>
            <div className='left-side'>
                <h1 className='title'>About Vapor</h1>
                <p style={{fontSize: "18px", padding: "0 50px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                    Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                    justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                    dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                    Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                </p>
                <TopGames />               
            </div>
            <GameList/>
        </div>
    );
}

export default Home;
