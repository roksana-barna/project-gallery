import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

const loadedprojects = useLoaderData()
console.log(loadedprojects)
const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const description = form.description.value;
    const updatetoys = {
        price, description
    }
    console.log(updatetoys)
    // put
    fetch(`https://project-gallery-server.vercel.app/update/${loadedprojects._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatetoys)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert('projects updated succecssfully')
            }
        })
}
return (
    <div>
        <div className='w-9/12 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-3xl  text-center font-bold text-blue-950 mt-10">Update your Projects!</h1>
                                <h2 className='text-xl font-bold text-blue-700 my-4'>Projects Name:   {loadedprojects.projectName}</h2>

                                <form onSubmit={handleUpdate}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Technology</span>
                                        </label>
                                        <input type="text" placeholder="price" name="price" defaultValue={loadedprojects.usedTechnology} className="input input-bordered" />
                                    </div>
                                
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <textarea type="text" placeholder="description" defaultValue={loadedprojects.projectDetails} name="description" className=" w-full p-20 border border-gray-300 input input-bordered" />

                                    </div>
                                    <div className="form-control mt-6">
                                        <input className='bg-blue-950 p-3 text-white rounded-xl' type="submit" value="Update" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Update;