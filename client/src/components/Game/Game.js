import styles from './Game.module.css';
import { Link } from 'react-router-dom';

const Game = ({id, img, alt, title, desc}) => {
    return (
        <Link className={styles.game} to={'/game/' + id}>
            <img className={styles.gameCover} src={img} alt={alt}/>
            <Link className={styles.gameTitle} to={'/game/' + id}>{title}</Link>
            {/* <p className={styles.gameDesc}>{desc}</p> */}
        </Link>
    );
}

export default Game;