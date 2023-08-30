import React, { useEffect, useState } from 'react';
// import { useQuery } from "@tanstack/react-query";

import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';

const Managestudent = () => {
    // const [axiosSecure] = useAxiosSecure();
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await axiosSecure.get('/login')
    //     return res.data;
    // })
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://project-gallery-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    },)

    const handleMakeAdmin = user => {
        fetch(`https://project-gallery-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    console.log(users)
    return (

        <div className="w-full">
            {/* <Helmet>
                <title>Smooth Moves| Manage users</title>
            </Helmet> */}

            <div className="overflow-x-auto pt-9">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className='text-sm'>
                        <tr className="text-blue-800">
                            <th>Name</th>
                            <th>Email</th>
                            <th> Current Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user) => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='text-purple-500 font-bold'>

                                    {
                                        user.role === 'admin' ? 'admin' : user.role === 'student' ? 'student' : 'student'

                                    }

                                </td>
                                <td><button onClick={() => handleMakeAdmin(user)}
                                    className="btn  bg-sky-400  text-white" disabled={user.role === 'admin'}

                                >Make Admin</button></td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Managestudent;