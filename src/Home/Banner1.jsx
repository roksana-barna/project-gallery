import React from 'react';
import { Link } from 'react-router-dom';


const Banner1 = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg)' }}>

            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl  font-bold">Welcome to the Archive Projects</h1>
                    <p className="mb-5 text-base">Explore a wealth of historical projects and discover the past.</p>

                    <Link to='/addproject'>  <button className="bg-pink-700 px-6 py-3 rounded xl uppercase font-semibold">Add Your Project</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner1;