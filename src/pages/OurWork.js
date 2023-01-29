import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const OurWork = () => {
    return(
        <Work 
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            style={{ background: "#fff"}}
        >
            <Movie>
                <h1>The Athlete</h1>
                <div className='line'></div>
                <Link to='/work/the-athlete'>
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h1>The racer</h1>
                <div className='line'></div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt="the racer" />
                </Link>
            </Movie>
            <Movie>
                <h1>Good times</h1>
                <div className='line'></div>
                <Link to='/work/good-times'>
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    )
}    

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 10rem 10rem;
    h2 {
        padding: 1rem 0 rem;
    }
`;

const Movie = styled.div`
    position: relative;
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
    h1 {
        color: black;
        position: absolute;
        top: -10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
`;

export default OurWork;