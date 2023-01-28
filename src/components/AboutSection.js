import React from 'react';
//images
import home1 from '../img/home1.png';
//Styled
import { About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography that you have. We have professionals with amazing skills</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a video-camera"></img>
            </Image>
        </About>
    )
}

//styled Components

export default AboutSection;