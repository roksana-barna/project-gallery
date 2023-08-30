import React, { useEffect, useState } from 'react';
// import StarRating from '../Home/StarRating';
// import { Link } from 'react-router-dom';
import ApproveProjectCard from '../Components/ApproveProjectCard';



const AppoveProject = () => {
    const [approvedProjects, setApprovedProjects] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    console.log(approvedProjects)
    useEffect(() => {
        fetch('https://project-gallery-server.vercel.app/project')
            .then(res => res.json())
            .then(data => setApprovedProjects(data))
    }, [isSearched])


    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.search.value;
        console.log(text);
        if (text) {
            fetch(`https://project-gallery-server.vercel.app/projectNameSearch/${text}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setApprovedProjects(data);
                });
        } else {
            setIsSearched(!isSearched);
        }
    };

    return (
        <div>
            <div>
                <h2 className='text-xl text-blue-950  uppercase text-center font-bold my-6 mt-10' >All Projects</h2>
                <form onSubmit={handleSearch} className='text-center p-5'>
                    <input type='text' placeholder='Project name' name='search'

                        className=' bg-transparent border-2 rounded p-1 w-72 pl-2' />
                    <button type='submit' className='bg-blue-900 p-2 rounded-lg text-white' >Search</button>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6 '>
                {

                    approvedProjects?.map(project => <ApproveProjectCard
                        key={project._id}
                        project={project}

                    ></ApproveProjectCard>)

                }


            </div>
            <div className='text-center'>
                <button className='bg-pink-700 rounded-xl px-3 font-bold py-2  mb-4 text-white'>Show More</button>

            </div>
        </div>
    );
};

export default AppoveProject;