import React from 'react';
import img1 from '../images/tank1.JPG';
import img2 from '../images/tank2.JPG';
import GameList from '../components/GameList';
import Product from "../components/Product/Product";

function Store() {
    return (
        <section className='flex-row'>
            <div className='left-side'>
                <h1 className='title'>Store</h1>
                    <div className="store-items">
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
            </div>
            <GameList/>
        </section>
    )
};

export default Store;