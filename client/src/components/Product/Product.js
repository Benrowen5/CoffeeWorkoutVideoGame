import styles from './Product.module.css';
import { Link } from 'react-router-dom';

const Product = ({img, alt, title, desc}) => {
    return (
        <div className={styles.game}>
            <img className={styles.gameCover} src={img} alt={alt}/>
            <Link className={styles.gameTitle} to={'/cart'}>{title}</Link>
            <p className={styles.gameDesc}>{desc}</p>
        </div>
    );
}

export default Product;