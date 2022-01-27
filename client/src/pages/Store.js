import React from 'react';
import img1 from '../images/tank1.JPG';
import img2 from '../images/tank2.JPG';

function Store(){
    return(
        <section className='store'>
            <h2>Store</h2>
            <div className='flex-row'>
                <div className='product'>
                    <img src={img1} alt="uni-sex tank top in black" style={{height: "250px"}}/>
                    <h3>Unisex Tank</h3>
                    <h4>$19.99</h4>
                </div>
                <div className='product'>
                    <img src={img2} alt="uni-sex tank top in black" style={{height: "250px"}}/>
                    <h3>Women's Tank</h3>
                    <h4>$18.99</h4>
                </div>
            </div> 
        </section>
    )
};

export default Store;