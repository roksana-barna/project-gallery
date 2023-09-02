import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/314619260_5703040226425785_3969937917540706261_n.jpg';
import img2 from '../assets/download.jpg';
import img3 from '../assets/images.jpg';
import img4 from '../assets/software-developer-6521720_1920-e1633019005526.webp';
import img5 from '../assets/Best-Code-and-Text-Editors.png';

const Banner = () => {
    return (
        <Carousel className='' >
            <div className=''>
                <img className='' src={img1} />
            </div>
           
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>

        </Carousel>
    );
};

export default Banner;