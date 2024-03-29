import React, {useState} from 'react';
//Styles 
import { About } from '../styles';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const FaqSection = () => {
    const [element, controls] = useScroll();

    return(
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <div className="description">
                
                <h2>Any Questions <span>FAQ</span></h2>

                <AnimateSharedLayout>
                    <Toggle title="How do I start?">
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus commodo, pharetra tellus eu, aliquet neque.</p>
                        </div>
                    </Toggle>    
                
                    <Toggle title="Daily Schedule">
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Nunc elementum accumsan dolor ut facilisis. Fusce rutrum nulla id augue consequat placerat.</p>                  
                        </div>
                    </Toggle>
               
                    <Toggle title="Different Payment Methods">
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Nullam aliquet auctor purus, eget vestibulum urna vulputate id. Aliquam ut tempus eros.</p>    
                        </div>  
                    </Toggle>
               
                    <Toggle title="What products do you offer?">
                        <div className='answer'>
                            <p>lorem ipsum dolor sit amet.</p>
                            <p>Vestibulum rhoncus velit molestie placerat faucibus. Donec blandit ac massa at efficitur. Nulla ut tempus purus. Fusce in molestie risus.</p>
                        </div>
                    </Toggle>
                </AnimateSharedLayout>    
                
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