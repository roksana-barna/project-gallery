import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Manageproject = () => {
    const [allProjects, setAllProjects] = useState([]);
    console.log(allProjects)
    useEffect(() => {
        fetch('https://project-gallery-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => setAllProjects(data))
    },)
    const handleMakeApproved = project => {
        fetch(`https://project-gallery-server.vercel.app/project/approved/${project._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${project.projectName} is Approved Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeDenied = project => {
        fetch(`https://project-gallery-server.vercel.app/project/denied/${project._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${project.projectName} is Denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div className="w-full">
            {/* <Helmet>
            <title>Smooth Moves| Manage class</title>
        </Helmet> */}

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className=' text-sm'>
                        <tr className="text-blue-800">
                            <th>Project Image</th>
                            <th>Project Name</th>
                            <th>Used Technology</th>
                            <th>live Link</th>
                            <th>Server Link </th>
                            <th>status</th>
                            <th>Approve</th>
                            <th>Deny</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProjects.map((project) => <tr key={project._id}>
                                <td><img className='h-8 w-8 rounded-xl' src={project.projectImage} alt="" /></td>
                                <td>{project.projectName}</td>
                                <td>{project.usedTechnology}
                                </td>
                                <td><button className='bg-purple-500  px-5 font-bold rounded-lg text-white'><Link to={project.liveLink

                                }>Live Link</Link></button></td>
                                <td><button className='bg-purple-500  px-5 font-bold rounded-lg text-white'><Link to={project.serverSideLink
                                }>Server Link</Link></button></td>

                                <td className='text-red-500 font-bold'>
                                    {project.role === 'approved' ? 'approved' : project.role === 'denied' ? 'denied' : project.status}
                                </td>
                            <td><button onClick={() => handleMakeApproved(project)}
                                className=" btn bg-purple-500 px-3  rounded-xl text-white" disabled={project.role === 'approved'} >Approve</button></td>
                            <td>  <button onClick={() => handleMakeDenied(project)} className="btn bg-red-400 px-3 rounded-xl text-white"
                                disabled={project.role === 'denied'}>Deny</button></td>
                                {/* <td><button className='bg-green-300 py-1 px-3 rounded-xl text-white'><Link to='/dashboard/feedback'> feedback</Link></button></td> */}
                            </tr>)

                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Manageproject;