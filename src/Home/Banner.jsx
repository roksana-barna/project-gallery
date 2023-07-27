import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/photo-1572177812156-58036aae439c.jpg';
import img2 from '../assets/coding-in-schools.webp';
import img3 from '../assets/seven-innovative-projects-on-image-processing-min.webp';
import img4 from '../assets/software-developer-6521720_1920-e1633019005526.webp';
import img5 from '../assets/Best-Code-and-Text-Editors.png';

const Banner = () => {
    return (
        <Carousel className='' >
            <div className=''>
                <img className='' src={img1} />
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
            <div>
                <img src={img2} />
            </div>

        </Carousel>
    );
};

export default Banner;