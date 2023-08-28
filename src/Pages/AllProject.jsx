import React, { useEffect, useState } from 'react';
// import StarRating from '../Home/StarRating';
// import { Link } from 'react-router-dom';
import AllProjectCard from '../Components/AllProjectCard';


const AllProject = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    console.log(allProjects)
    useEffect(() => {
        fetch(`https://university-project-hub.vercel.app/projects`)
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [isSearched])


    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.search.value;
        console.log(text);
        if (text) {
            fetch(`https://university-project-hub.vercel.app/projectNameSearch/${text}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setAllProjects(data);
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

                    allProjects?.map(project => <AllProjectCard
                        key={project._id}
                        project={project}

                    ></AllProjectCard>)
                        }
               

            </div>
        </div>
    );
};

export default AllProject;