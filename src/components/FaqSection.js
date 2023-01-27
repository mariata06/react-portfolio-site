import React from 'react';

const FaqSection = () => {
    return(
        <div className='faq'>
            <div className="description">
                
                <h2>Any Questions <span>FAQ</span></h2>
                    
                <div className='question'>
                    <h4>How do i start?</h4>
                    <div className='answer'>
                        <p>lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus commodo, pharetra tellus eu, aliquet neque.</p>
                    </div>
                </div>
                <div className='question'>
                    <h4>Daily Schedule</h4>
                    <div className='answer'>
                        <p>lorem ipsum dolor sit amet.</p>
                        <p>Nunc elementum accumsan dolor ut facilisis. Fusce rutrum nulla id augue consequat placerat.</p>
                    </div>
                </div>
                <div className='question'>
                    <h4>Different Payment Methods</h4>
                    <div className='answer'>
                    <p>lorem ipsum dolor sit amet.</p>
                    <p>Nullam aliquet auctor purus, eget vestibulum urna vulputate id. Aliquam ut tempus eros.</p>
                    </div>
                </div>
                <div className='question'>
                    <h4>What products do you offer?</h4>
                    <div className='answer'>
                    <p>lorem ipsum dolor sit amet.</p>
                    <p>Vestibulum rhoncus velit molestie placerat faucibus. Donec blandit ac massa at efficitur. Nulla ut tempus purus. Fusce in molestie risus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FaqSection;