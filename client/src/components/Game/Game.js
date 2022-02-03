import styles from './Game.module.css';
import { Link } from 'react-router-dom';

const Game = ({id, img, alt, title}) => {
    return (
        <div className={styles.game}>
            <Link key={id} to={'/game/' + id}>
            <img className={styles.gameCover} src={img} alt={alt}/>
            <h2 className={styles.gameTitle}>{title}</h2>
            {/* <p className={styles.gameDesc}>{desc}</p> */}
            </Link>
        </div>
    );
}

export default Game;