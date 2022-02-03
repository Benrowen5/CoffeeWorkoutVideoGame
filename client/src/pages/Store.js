import React from 'react';
import img1 from '../images/tank1.JPG';
import img2 from '../images/tank2.JPG';
import GameList from '../components/GameList';
import Product from "../components/Product/Product";
import styles from "./Dashboard.module.css";

function Store() {
    return (
        <section className='flex-row'>
            <section className='left-side flex-row'>
                <h1 className='title'>Store</h1>
                <div className={styles.gamesList}>
                    <Product
                        img={img1}
                        alt={'uni-sex tank top in black'}
                        title={'Unisex Tank'}
                        desc={'$19.99'}
                    />
                    <Product
                        img={img2}
                        alt={'uni-sex tank top in black'}
                        title={"Women's Tank"}
                        desc={'$18.99'}
                    />
                </div>
            </section>
            <GameList/>
        </section>
    )
};

export default Store;