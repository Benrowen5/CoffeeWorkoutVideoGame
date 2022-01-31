import React, {useState, useEffect} from 'react';
import GameList from '../components/GameList';
import Discussion from '../components/Discussion';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import styles from './SingleGame.module.css';
import Title from "../components/Title/Title";

const VideoGame = (props) => {
    const { id: gameId } = useParams();

    const [singleGameData, setSingleGameData] = useState([]);

    useEffect(()=>{
        api.getGame(gameId).then(res=>{
            
            if (res.status < 200 || res.status > 299 ) {
                throw new Error('something went wrong!');
            }
            setSingleGameData(res.data)
        })
    },[gameId]);

    return (
        <section className='flex-row'>
            <div className='game'>
                <img className={styles.cover} src={'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157'} alt={'Cover'}/>
                <Title title={'God of War'}/>
                <p className={styles.desc}>His vengeance against the Gods of Olympus years behind him, Kratos now lives
                    as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he
                    must fight to survive… and teach his son to do the same.
                </p>
                <p className={styles.genre}>Action, Adventure, Mythology, Story-Rich</p>
                <div>
                    <button type="button" className={styles.favBtn}>Favorite</button>
                </div>
                <CommentForm username={props.username}/>
                <Discussion
                    username={props.username}
                    comments={singleGameData.comments}/>
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;