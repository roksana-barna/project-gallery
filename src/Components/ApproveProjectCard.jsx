import React, { useState } from 'react';
import StarRating from '../Home/StarRating';
import { Link } from 'react-router-dom';

const ApproveProjectCard = ({ project }) => {
    const { projectImage, projectDetails, projectName, serverSideLink, usedTechnology, liveLink, clientSideLink, _id } = project;

    return (
        <div className=''>
            <div className="card w-96 h-[500px] shadow-xl mt-10 mb-12">
                <figure><img className='rounded-xl w-96 h-52' src={projectImage} alt="image" /></figure>
                <div className="card-body ">
                    <StarRating></StarRating>

                    <h2 className="card-title font-bold">
                        {projectName}
                    </h2>
                    {/* <div><span className="font-semibold text-blue-950 uppercase">Technology :</span>{usedTechnology}</div> */}
                    <div className='flex'>
                        <Link to={`/viewdetails/${_id}`}><button className="btn btn-outline shadow-xl border-0 mr-5 bg-gray-50  border-b-4 mb-5  ">View Details</button>

                        </Link>
                        <Link to={`/update/${_id}`}><button className="btn btn-outline shadow-xl border-0  bg-gray-50 border-b-4 mb-5  ">UpDate Project</button>
                        </Link>

                    </div>

                    <div className="card-actions justify-start">
                        <div ><button className='bg-blue-900 px-2 font-normal rounded-lg  text-white'><Link to={liveLink
                        }>Live Link</Link></button></div>
                        <div><button className='bg-blue-900 px-2 font-normal rounded-lg   text-white'><Link to={clientSideLink
                        }>Client Link</Link></button></div>
                        <div><button className='bg-blue-900 px-2  font-normal rounded-lg text-white'><Link to={serverSideLink
                        }>Server Link</Link></button></div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ApproveProjectCard;