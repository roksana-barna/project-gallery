import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const ViewDetails = () => {
    
    const {user}=useContext(AuthContext);
    const viewdetails=useLoaderData()
    const {projectImage,projectDetails,projectName,serverSideLink,usedTechnology}=viewdetails
    return (
       <div className='items-center ml-80 mt-8 mb-7'>
         <div className='w-9/12 mx-auto'>
          
          <div className="card w-96 shadow-xl bg-blue-50">
             <figure><img  className='w-full h-56'src={projectImage} alt="projects" /></figure>
             <div className="card-body bg-blue-50">
                 <h2 className='card-title font-bold'>Name: {projectName}</h2>
                    <h5>{projectDetails}</h5>
                    <p><span className='font-bold'>Technology:</span>{usedTechnology}</p>
                    <h5><span className='font-bold'>server</span>{serverSideLink}</h5>
                   
             </div>
         </div>
     </div>
       </div>
    );
};

export default ViewDetails;