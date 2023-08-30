import React, { useState } from 'react';

const AdProject = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const projectImage = form.projectImage.value;
    const projectName = form.projectName.value;
    const usedTechnology = form.usedTechnology.value;
    const projectDetails = form.projectDetails.value;
    const liveLink = form.liveLink.value;
    const clientSideLink= form.clientSideLink.value;
    const serverSideLink= form.serverSideLink.value;


    const projects = { projectImage, projectName,usedTechnology,projectDetails, liveLink,clientSideLink,serverSideLink};
    console.log(projects);
    form.reset();
    fetch('https://project-gallery-server.vercel.app/projects', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(projects)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('added this projects successfully')
        }
      })

  }
 

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Project</h2>

      <div className="mb-4">
        <label htmlFor="projectImage" className="block mb-2 text-sm font-bold text-gray-700">
          Project Image:
        </label>
        <input
          type="text"
          name="projectImage"
          id="projectImage"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div> 
      {/* <div className="mb-4">
            <label htmlFor="projectImage" className="block  text-sm font-bold ">Picture URL of the Project:</label>
            <input type="url" id="projectImage " name="projectImage " className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"  required/>
          </div> */}

      <div className="mb-4">
        <label htmlFor="projectName" className="block mb-2 text-sm font-bold text-gray-700">
          Project Name:
        </label>
        <input
          type="text"

          id="projectName"
          name="projectName"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="usedTechnology" className="block mb-2 text-sm font-bold text-gray-700">
          Used Technology:
        </label>
        <input
          type="text"
          id="usedTechnology"
          name="usedTechnology"

          
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="projectDetails" className="block mb-2 text-sm font-bold text-gray-700">
          Project Details (250-300 words):
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"

          rows="6"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="liveLink" className="block mb-2 text-sm font-bold text-gray-700">
          Live Link:
        </label>
        <input
          type="url"
          id="liveLink"
          name="liveLink"

        
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="clientSideLink" className="block mb-2 text-sm font-bold text-gray-700">
          Client Side Link:
        </label>
        <input
          type="url"
          id="clientSideLink"
          name="clientSideLink"

         
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="serverSideLink" className="block mb-2 text-sm font-bold text-gray-700">
          Server Side Link:
        </label>
        <input
          type="url"
          id="serverSideLink"
          name="serverSideLink"

         
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-950 rounded hover:bg-blue-600"
        >
          Submit Project
        </button>
      </div>
    </form>
  );
};

export default AdProject;
