import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
//new Syntax (useLocation instead useHistory)
import {useLocation} from 'react-router-dom';
import { MovieState } from '../movieState';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
    const history = useLocation();
    const url = history.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //useEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url])
   
    //Имитирует переход на страницы the-athlete, the-racer, good-times c помощью useLocation 
    //по клику на изображение со страницы OurWork. В реальных сайтах это должно работать через api
    return(
        <>
           {movie && (
                <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title}/>
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie"></img>
                    </ImageDisplay>
                </Details>
           )} 
        </>
    )
}    

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`; 

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 8rem;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle = styled.div`
    padding: 3rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
`;

const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className='line'></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

`;

export default MovieDetail;