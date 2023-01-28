import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => {
    return(
        <Work>
            <Movie>
                <h1>The Athlete</h1>
                <div className='line'></div>
                <Link to='/athlete'>
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h1>The racer</h1>
                <div className='line'></div>
                <Link to='/theracer'>
                    <img src={theracer} alt="the racer" />
                </Link>
            </Movie>
            <Movie>
                <h1>Good times</h1>
                <div className='line'></div>
                <Link to='/goodtimes'>
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    )
}    

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0 rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;