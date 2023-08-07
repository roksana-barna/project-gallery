import React from 'react';
import StarRating from '../Home/StarRating';
import { Link } from 'react-router-dom';
import Tech from './Tech';

const AllProjectCard = ({ project }) => {
    const { name, clientlink, detailts, image, serverlink, livelink, technology, _id } = project;
    return (
        <div>
            <div className="card w-96 bg-indigo-950 shadow-xl mb-12">
                <figure><img className='rounded-xl h-52' src={image}alt="image" /></figure>
                <div className="card-body">
                    <StarRating></StarRating>
                    <h2 className="card-title text-white">
                        {name}
                        </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                       
                        <div className="badge badge-error text-white mt-1">{technology}</div>
                        {/* <div className="badge badge-error text-white mt-1">TailwindCSS</div>
                        <div className="badge badge-error text-white mt-1">Express.js</div>
                        <div className="badge badge-error text-white mt-1">MongoDB</div>
                        <div className="badge badge-error text-white mt-1">Firebase </div> */}

                    </div>
                    <div className="badge badge-primary text-white mt-1">Details</div>

                    <p className='text-white'>{detailts}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-info text-white mt-1"><Link to='https://toy-marketplace-client-s-fa9ff.web.app/'>{livelink}</Link></div>
                        <div className="badge badge-info text-white mt-1"><Link to='https://toy-marketplace-client-s-fa9ff.web.app/'>{clientlink}</Link></div>
                        <div className="badge badge-info text-white mt-1"><Link to='https://github.com/roksana-barna/b7a11-toy-marketplace-client-side'>{serverlink}</Link></div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProjectCard;