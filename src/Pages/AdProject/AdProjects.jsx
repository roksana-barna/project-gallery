import React,{useState} from 'react';

const AdProjects = ({onAddProject}) => {
    const [projectName, setProjectName] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      if (projectName.trim() !== '') {
        // Here, you can perform any additional actions before adding the project,
        // like sending the data to a backend server.
  
        // Call the onAddProject function to pass the project name to the parent component.
        onAddProject(projectName);
  
        // Reset the input field after adding the project.
        setProjectName('');
      }
    };
    return (
        <div className='text-center '>
             <form className='bg-slate-400 p-36' onSubmit={handleSubmit}>
      <label className='text-white font-bold text-xl' htmlFor="projectName">Project Name:  </label>
      <input
        type="text"
        id="projectName"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
    className='bg-violet-300 rounded'
        
      />
      <br/>
      <button className='p-10 bg-blue-900 px-4 rounded py-2 mt-10 text-white' type="submit">Add Project</button>
    </form>
        </div>
    );
};

export default AdProjects;