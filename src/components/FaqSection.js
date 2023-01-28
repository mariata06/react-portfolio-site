import React from 'react';
//Styles 
import { About } from '../styles';
import styled from 'styled-components';

const FaqSection = () => {
    return(
        <Faq>
            <div className="description">
                
                <h2>Any Questions <span>FAQ</span></h2>
                    
                <div className='question'>
                    <h4>How do i start?</h4>
                    <div className='answer'>
                        <p>lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus commodo, pharetra tellus eu, aliquet neque.</p>
                    </div>
                    <div className='faq-line'></div> 
                </div>
                <div className='question'>
                    <h4>Daily Schedule</h4>
                    <div className='answer'>
                        <p>lorem ipsum dolor sit amet.</p>
                        <p>Nunc elementum accumsan dolor ut facilisis. Fusce rutrum nulla id augue consequat placerat.</p>
                    </div>
                    <div className='faq-line'></div> 
                </div>
                <div className='question'>
                    <h4>Different Payment Methods</h4>
                    <div className='answer'>
                        <p>lorem ipsum dolor sit amet.</p>
                        <p>Nullam aliquet auctor purus, eget vestibulum urna vulputate id. Aliquam ut tempus eros.</p>
                    </div>
                    <div className='faq-line'></div> 
                </div>
                <div className='question'>
                    <h4>What products do you offer?</h4>
                    <div className='answer'>
                        <p>lorem ipsum dolor sit amet.</p>
                        <p>Vestibulum rhoncus velit molestie placerat faucibus. Donec blandit ac massa at efficitur. Nulla ut tempus purus. Fusce in molestie risus.</p>
                    </div>
                    <div className='faq-line'></div> 
                </div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer; 
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;