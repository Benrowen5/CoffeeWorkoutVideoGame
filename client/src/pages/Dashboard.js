// import React, { useState, useEffect } from 'react';
// import Auth from '../../utils/auth'
// import api from '../../utils/api';
import styles from './Dashboard.module.css';
import GameList from "../components/GameList";
import Title from "../components/Title/Title";
import Game from "../components/Game/Game";



function Dashboard(){
    // // starter function for calling favedGames
    // // waiting for route
    // const [faveGameData, setFaveGameData] = useState({});
    // const faveGameDataLength = Object.keys(faveGameData).length;

    // useEffect(() => {
    //     const getFaveGameData = async () => {
    //         try {
    //             const token = Auth.loggedIn() ? Auth.getToken() : null;

    //             if (!token) {
    //             return false;
    //             }

    //             const response = await api.getUser(token);

    //             if (!response.ok) {
    //             throw new Error('something went wrong!');
    //             }

    //             const user = await response.json();
    //             setFaveGameData(user);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //         };
    //         getFaveGameData()
    //     }, [faveGameDataLength]
    // );


    return(
        <div>
            <Title title={'Your favorite games'}/>
            <div className={styles.gamesList}>

                {/*Replace below with list map with actual data*/}
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
                    desc={'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.'}
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
    )
};

export default Dashboard;

