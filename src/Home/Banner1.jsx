import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { Fade, Slide } from "react-awesome-reveal";
import img from '../assets/Creative brain and light bulb logo template.png'


const Banner1 = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg)' }}>

            <div className='md:flex'>
                <div className="hero-overlay md:w-60"></div>
                <div className="hero-content md:text-center text-neutral-content ">
                    <div className="">
                        <img className='w-28 h-24 md:ml-56 ' src={img}alt="" />
                        <Slide>
                            <h1 className="mb-5 text-5xl  font-bold">Welcome to the Archive Projects</h1>
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            <p className="mb-5 text-base">Explore a wealth of historical projects and discover the past.</p>
                            </Fade>
                               <Link to='/addproject'>  <button className="bg-pink-700 px-6 py-3 rounded xl uppercase font-semibold">Add Your Project</button>
                                </Link>

                            </div>
                    </div>
                    <div className='md:w-80  md:mr-40'>
                        <Banner></Banner>

                    </div>
                </div>
            </div>
            );
};

            export default Banner1;