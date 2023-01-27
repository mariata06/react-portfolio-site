import React from 'react';
import home2 from '../img/home2.png';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

const ServicesSection = () => {
    return(
        <div className='Services'>
            <div className="description">
                
                <h2>High <span>quality</span> services.</h2>
                    
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={clock} alt="icon-clock" />
                            <h3>Efficient</h3>
                            <p>lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={diaphragm} alt="icon-diaphragm" />
                            <h3>Diaphragm</h3>
                            <p>lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={money} alt="icon-money" />
                            <h3>Affordable</h3>
                            <p>lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={teamwork} alt="icon-teamwork" />
                            <h3>Teamwork</h3>
                            <p>lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="camera"></img>
            </div>
        </div>
    )
}


export default ServicesSection;