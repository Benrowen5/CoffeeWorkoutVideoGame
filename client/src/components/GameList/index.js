import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import Title from "../Title/Title";
import Game from "../Game/Game";
import styles from "../../pages/Dashboard.module.css";

const GameList = () => {
    const [gameData, setGameData] = useState([]);
    useEffect(()=>{
        api.getAllGames().then(res=>{
            
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            setGameData(res.data)
        })
        
    },[]);

    return (
        <div className='gameList'>
            <Title title={'Top Games of 2021'}/>
            <div className={styles.gamesList}>
                {gameData.map((game) => (
                    <Game
                        key={game.title}
                        img={'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg?t=1642465111'}
                        alt={'Game cover'}
                        title={'Monster Hunter Rise'}
                        desc={'Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.'}
                    />
                ))}
            </div>

            {/*Delete below after populating above list with actual data*/}

            <div className={styles.gamesList}>
                <Game
                    img={'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg?t=1642465111'}
                    alt={'Game cover'}
                    title={'Monster Hunter Rise'}
                    desc={'Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.'}
                />
                <Game
                     img={'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157'}
                     alt={'Game cover'}
                     title={'God of War'}
                     desc={'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of the Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.'}
                 />
                <Game
                    img={'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg?t=1642465111'}
                    alt={'Game cover'}
                    title={'Monster Hunter Rise'}
                    desc={'Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.'}
                />
                <Game
                    img={'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg?t=1642465111'}
                    alt={'Game cover'}
                    title={'Monster Hunter Rise'}
                    desc={'Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.'}
                />
                <Game
                    img={'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg?t=1642465111'}
                    alt={'Game cover'}
                    title={'Monster Hunter Rise'}
                    desc={'Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.'}
                />
            </div>
        </div>
    );
};

export default GameList;
