import React from 'react';
import until from '../assets/Untitled.png'
import chef from '../assets/chef.png'
import dance from '../assets/dance.png'
import { Link } from 'react-router-dom';
import {Slide } from "react-awesome-reveal";
import StarRating from './StarRating';


const ProjectsCard = () => {
    return (
        <div className="" style={{backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg)'}}>

        <h2 className='uppercase text-white text-center font-semibold text-2xl p-14 '>Most Popular Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6 '>
            <Slide>
                <div className="card w-96 bg-indigo-950 shadow-xl mb-12">
                    <figure><img className='rounded-xl h-52' src={until} alt="Shoes" /></figure>
                    <div className="card-body">
                    <StarRating></StarRating>
                        <h2 className="card-title text-white">
                            BABY PUpUs
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            <div className="badge badge-error text-white mt-1">React js</div>
                            <div className="badge badge-error text-white mt-1">TailwindCSS</div>
                            <div className="badge badge-error text-white mt-1">Express.js</div>
                            <div className="badge badge-error text-white mt-1">MongoDB</div>
                            <div className="badge badge-error text-white mt-1">Firebase </div>

                        </div>
                        <div className="badge badge-primary text-white mt-1">Details </div>

                        <p className='text-white'>Create an intuitive and visually appealing website interface that allows users to easily browse, search,
                            and navigate through a wide range of toys.
                            Build trust with customers by prominently displaying trust seals, privacy policies.
                             build trust and confidence among potential customers.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-info text-white mt-1"><Link to='https://toy-marketplace-client-s-fa9ff.web.app/'>Live Site</Link></div>
                            <div className="badge badge-info text-white mt-1"><Link to='https://github.com/roksana-barna/b7a11-toy-marketplace-client-side'>Code</Link></div>

                        </div>
                    </div>
                </div>
                <div className="card w-96  bg-indigo-950 shadow-xl mb-12">
                    <figure><img className='h-52 rounded-xl' src={chef} alt="Shoes" /></figure>
                    <div className="card-body">
                        <StarRating></StarRating>
                        <h2 className="card-title text-white">
                            KOokilicious
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            <div className="badge badge-error text-white mt-1">React js</div>
                            <div className="badge badge-error text-white mt-1">Bootstarp</div>
                            <div className="badge badge-error text-white mt-1">Express.js</div>
                            <div className="badge badge-error text-white mt-1">MongoDB</div>
                            <div className="badge badge-error text-white mt-1">Firebase </div>

                        </div>
                        <div className="badge badge-primary text-white mt-1">Details </div>
                        <p className='text-white'>Showcase the rich and diverse world of Japanese cuisine by featuring traditional and authentic recipes,
                            ingredients, and cooking techniques.
                            Display a gallery of visually stunning images that capture the artistry and presentation of the chef's
                            culinary creations.
                            Include detailed step-by-step.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-info text-white mt-1"><Link to='https://chef-recipe-hunter-clien-a7147.web.app/'>Live Site</Link></div>
                            <div className="badge badge-info text-white mt-1"><Link to='https://github.com/roksana-barna/chef-recipe-hunter-client-side'>Code</Link></div>

                        </div>
                    </div>
                </div>
                <div className="card w-96   bg-indigo-950 shadow-xl mb-12">
                    <figure><img className='h-52 rounded-xl' src={dance} alt="Shoes" /></figure>
                    <div className="card-body">
                    <StarRating></StarRating>
                        <h2 className="card-title text-white">
                            SMOOTH MOVES
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            <div className="badge badge-error text-white mt-1">React js</div>
                            <div className="badge badge-error text-white mt-1">TailwindCSS</div>
                            <div className="badge badge-error text-white mt-1">Express.js</div>
                            <div className="badge badge-error text-white mt-1">MongoDB</div>
                            <div className="badge badge-error text-white mt-1">Firebase </div>
                            <div className="badge badge-error text-white mt-1"> Payment </div>
                            <div className="badge badge-error text-white mt-1">axios </div>
                            <div className="badge badge-error text-white mt-1">React query </div>
                            <div className="badge badge-error text-white mt-1">React hook </div>

                        </div>
                        <div className="badge badge-primary text-white mt-1">Details </div>
                        <p className='text-white'>Highlight the most popular or highly recommended dance classes offered by the school. Provide a
                            seamless payment process for users to enroll in these classes directly from the website.
                           payment dates,payemet history and transaction statuses.
                            </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-info text-white mt-1"> <Link to='https://summer-camp-client-side-b9363.web.app/'>Live Site</Link></div>
                            <div className="badge badge-info text-white mt-1"><Link to='https://github.com/roksana-barna/summer-camp-client'>Code</Link></div>

                        </div>
                    </div>
                </div>
                </Slide>

        </div>

    </div>
    );
};

export default ProjectsCard;