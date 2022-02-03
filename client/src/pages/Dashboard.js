import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import styles from './Dashboard.module.css';
import Game from "../components/Game/Game";



const Dashboard = (props) => {
    const userId = props.id;
    console.log(userId);
    
    const [faveGameData, setFaveGameData] = useState([]);

    useEffect(()=>{
        api.getUser(userId).then(res=>{
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            setFaveGameData(res.data.favorites)
        })
    },[]);

    return(
        <div>
            <h1 className='title'>Your Favorite Games</h1>
            <div className={styles.gameList}>
                    <div className="favoriteList">
                        {faveGameData.map((game) => (
                            <Game
                            id={game._id}
                            img={game.image}
                            alt={game.title}
                            title={game.title}
                            desc={game.description}
                            />
                        ))}
                    </div>
            </div>
        </div>
    )
};

export default Dashboard;

