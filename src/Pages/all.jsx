import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const AdProject = () => {
  const [projects, setProjects] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // Fetch projects from the server
  const fetchProjects = async (pageNumber = 0) => {
    try {
      const response = await axios.get(`https://university-project-hub.vercel.app/projects?page=${pageNumber}`);
      setProjects(response.data.projects);
      setPageCount(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle pagination change
  const handlePageChange = (selectedPage) => {
    fetchProjects(selectedPage.selected);
  };

  return (
    <div>
      {/* Display your projects here */}
      {projects.map((project) => (
        <div key={project.id}>
          {/* Display project details */}
        </div>
      ))}

      {/* Pagination */}
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default AdProject;
