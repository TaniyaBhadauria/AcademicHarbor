import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'
import './styles/Repository.css'

const Repository: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
    // Function to toggle the visibility of the form
    const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
    };
      // Function to close the form
    const closeForm = () => {
      setIsFormVisible(false);
    };
      // Add event listener to close the form when Escape key is pressed
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeForm();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
    // Dummy project data
    const projects = [
      { name: "Project 1", coordinator: ["Abey K Rajan", "Taniya Bhadauria",], team: "Team Members 1" },
      { name: "Project 2", coordinator: ["Harji Kaur", "Abhiroop"], team: "Team Members 2" },
      // Add more projects as needed
    ];

  // Function to format coordinators array with comma separation and "..." if overflow
  const formatCoordinators = (coordinators: string[]) => {
    const MAX_COORDINATORS = 2; // Maximum number of coordinators to display before using "..."
    if (coordinators.length <= MAX_COORDINATORS) {
      return coordinators.join(", ");
    } else {
      const visibleCoordinators = coordinators.slice(0, MAX_COORDINATORS).join(", ");
      return `${visibleCoordinators}, ...`;
    }
  };

  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <Header />
      <div className="repo-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0 }}>
        <p className="text-1">Unlock the Gateway to Knowledge: explore, Expand, and Excel with Our Project Repository!</p>
        <button className="add-project-btn" onClick={toggleFormVisibility}><i className="fas fa-plus"></i> Add Add a new project</button>
        <br/>
        {isFormVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={toggleFormVisibility}>&times;</span><br/><br/>
            <form>
              <div className="form-group">
                <label htmlFor="project-name">Project Name:</label>
                <input className="project-input" id="project-name" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="project-contributors">Project Contributors:</label>
                <input id="project-contributors" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="team-name">Team Name:</label>
                <input id="team-name" type="text" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
        <button className="add-project-btn"><i className="fas fa-filter"></i> Filter project repository</button>
        <br/>
        <br/>
        <table className="project-table">
        <thead>
          <tr>
            <th>Projects/Papers</th>
            <th>Project Coordinators</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{formatCoordinators(project.coordinator)}</td>
              <td>{project.team}</td>
              <button className="details-btn"><i className="fas fa-info"></i> View more details</button>
            </tr>
          ))}
        </tbody>
      </table> 
      </div>
    </div>
  );
};

export default Repository;