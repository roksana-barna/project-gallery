import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../Home/StarRating';


const AllProject = () => {
    return (
        <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6 '>


                    <div className="card w-96 bg-indigo-950 shadow-xl mb-12">
                    <figure><img className='rounded-xl h-52' src='' alt="Shoes" /></figure>
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
            </div>
        </div>
    );
};

export default AllProject;