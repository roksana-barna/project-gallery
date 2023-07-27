import React, { useState } from 'react';

const AdProject = () => {
  const [projectImage, setProjectImage] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [usedTechnology, setUsedTechnology] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [clientSideLink, setClientSideLink] = useState('');
  const [serverSideLink, setServerSideLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform actions with the form data, such as sending it to a server or saving it to a database.

    // Clear the form fields after submission (optional)
    setProjectImage(null);
    setProjectName('');
    setUsedTechnology('');
    setProjectDetails('');
    setLiveLink('');
    setClientSideLink('');
    setServerSideLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Project</h2>

      <div className="mb-4">
        <label htmlFor="projectImage" className="block mb-2 text-sm font-bold text-gray-700">
          Project Image:
        </label>
        <input
          type="file"
          id="projectImage"
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          onChange={(e) => setProjectImage(e.target.files[0])}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="projectName" className="block mb-2 text-sm font-bold text-gray-700">
          Project Name:
        </label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
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
          value={usedTechnology}
          onChange={(e) => setUsedTechnology(e.target.value)}
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
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
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
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
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
          value={clientSideLink}
          onChange={(e) => setClientSideLink(e.target.value)}
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
          value={serverSideLink}
          onChange={(e) => setServerSideLink(e.target.value)}
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
