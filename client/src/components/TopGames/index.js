import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Game from '../Game/Game';

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
        <div>
            <h3>Featured Games:</h3>
                <div className="favoriteList">
                    {topFavorites.map((favorite) => (                  
                        <Link to={'/game/' + favorite._id} key={favorite.title}>
                            <Game
                                img={favorite.image}
                                alt={favorite.title}
                                title={favorite.title}
                                desc={favorite.description}
                            />
                        </Link>
                    ))}
                </div>
        </div>
    );
}

export default TopGames;
