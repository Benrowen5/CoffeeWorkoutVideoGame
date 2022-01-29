import React from 'react';
import img1 from '../images/tank1.JPG';
import img2 from '../images/tank2.JPG';
import GameList from '../components/GameList';

function Store() {
    return (
        <section className='flex-row'>
            <section className='store flex-row'>
                <h1 style={{width: "100%"}}>Store</h1>
                <div className='product'>
                    <img src={img1} alt="uni-sex tank top in black" style={{ height: "250px" }} />
                    <h3>Unisex Tank</h3>
                    <h4>$19.99</h4>
                </div>
                <div className='product'>
                    <img src={img2} alt="uni-sex tank top in black" style={{ height: "250px" }} />
                    <h3>Women's Tank</h3>
                    <h4>$18.99</h4>
                </div>
            </section>
            <GameList></GameList>
        </section>
    )
};

export default Store;