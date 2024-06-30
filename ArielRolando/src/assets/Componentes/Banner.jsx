import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import React from 'react';

const Banner = () => {
    let imagen5 = "remerasok.jpg";
    let imagen6 = "imagen2mejorada4.png"; 

    let imagenStyle = {
       
        position:'absolute',
        top:'20%',
       
        whdht:'auto',
        height:'auto',
    };

    let imagenStyle2 = {
       whdht:'auto',
       height:'auto',
        position:'absolute',
        top:'19.8%',    
        left: '24%',  
         
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col d-flex justify-content-end'>
                        <p><img src={"/images/" + imagen5} style={imagenStyle} alt="Remera" /></p>
                    </div>
                    <div className='col d-flex justify-content-end'>
                        <p><img src={"/images/" + imagen6} style={imagenStyle2} alt="Remera2" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

