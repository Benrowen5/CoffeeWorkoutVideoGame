import React, { useState, useEffect } from 'react';
import GameList from '../components/GameList';
import TopGames from '../components/TopGames';
import styles from '../pages/Dashboard.module.css'
import Title from "../components/Title/Title";

const Home = () => {
    return (
        <div className='flex-row'>
            <div className='left-side'>
                <Title title={'About Vapor'}/>
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
