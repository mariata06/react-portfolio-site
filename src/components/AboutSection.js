import React from 'react';
//images
import home1 from '../img/home1.png';
//Styled
import { About, Description, Image, Hide} from '../styles';
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography that you have. We have professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a video-camera"></motion.img>
            </Image>
            <Wave />
        </About>
    )
}

//styled Components

export default AboutSection;