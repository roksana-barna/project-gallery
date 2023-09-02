import React, { useEffect, useState } from 'react';

const Campaign = () => {
    const [usersCamp, setUserscamp] = useState([]);
    useEffect(() => {
        fetch('https://project-gallery-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUserscamp(data))
    },)
    return (
        <div className='grid md:grid-cols-3 gap-4 mt-16'>

            {
                usersCamp?.map((user) => <div key={user._id}>
                    <div className="card w-96 h-[200px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={user.photoURL} alt="Shoes" className="rounded-full h-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                            
                        </div>
                    </div>




                </div>)
            }







        </div>



    );
};

export default Campaign;