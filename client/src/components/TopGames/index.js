import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Game from '../Game/Game';
import Title from "../../components/Title/Title";

const TopGames = () => {
    const [topFavorites, setTopFavorites] = useState([]);

    useEffect(() => {
        api.getAllGames()
            .then(res => {
                if (res.status < 200 || res.status > 299) {
                    throw new Error('something went wrong!');
                }
                const data = res.data;
                // sort game results by favoriteCount value
                data.sort((a, b) => (a.FavoriteCount < b.FavoriteCount) ? 1: -1);
                // create new array for top 3 favorited games
                const topThreeArray = data.slice(0, 3);
                setTopFavorites(topThreeArray)
            });
    }, []);

    return (
        <div className='top-games'>
            <Title title={'Featured Games:'}/>
                <div className="favoriteList">
                    {topFavorites.map((favorite) => (
                        <Game
                        key={favorite.title}
                        id={favorite._id}
                        img={favorite.image}
                        alt={favorite.title}
                        title={favorite.title}
                        desc={favorite.description}
                        />
                    ))}
                </div>
        </div>
    );
}

export default TopGames;
