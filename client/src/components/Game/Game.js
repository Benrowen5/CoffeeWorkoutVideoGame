import styles from './Game.module.css';

const Game = ({img, alt, title, desc}) => {
    return (
        <div className={styles.game}>
            <img className={styles.gameCover} src={img} alt={alt}/>
            <p className={styles.gameTitle}>{title}</p>
            <p className={styles.gameDesc}>{desc}</p>
        </div>
    );
}

export default Game;