import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

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
        <div className="favoriteList">
            <h3>Featured Games:</h3>
            <ol>
                {topFavorites.map((favorite) => (
                    <li key={favorite.title}>
                        <Link to={'/game/' + favorite._id}>{favorite.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TopGames;
