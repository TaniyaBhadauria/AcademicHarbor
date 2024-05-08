import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Card } from 'antd';
import backgroundImage from './images/background.png';
import Header from './Component/Header';
import './styles/Repository.css';

// Define a type for the project object
interface UserProfileProps {
  userName: string;
  title: string;
  emailId: string;
  phone: string;
  role: string;
  profilePicture: string;
  linkedin: string;
}
// projectTitle: elements['project-title'].value,
// projectDescription: elements['project-description'].value,
// startDate: elements['start-date'].value,
// endDate: elements['end-date'].value,
// projectCoordinator: elements['project-coordinator'].value,
// teamID: elements['team-name'].value,
// projectDepartment: elements['project-department'].value,
// concentration: elements['concentration'].value,
// projectStatus: elements['project-status'].value,
interface Project {
  projectId: string;
  projectTitle: string;
  projectDescription: string;
  startDate : string;
  endDate: string;
  projectCoordinator: string;
  concentration: string;
  projectStatus: string;
  teamId: UserProfileProps[];
  // Add other properties as needed
}

const Repository: React.FC = () => {
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // State to track the selected project
  const [modalVisible, setModalVisible] = useState(false); // State to control the visibility of the modal

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

  // Fetch project data from the API
  useEffect(() => {
    fetch('http://localhost:8082/hello-world/all-projects')
      .then(response => response.json())
      .then((data: Project[]) => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, []);

  // Function to handle toggling filter dropdown visibility
  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  // Function to handle search input change
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to clear the search term
  const clearFilter = () => {
    setSearchTerm('');
  };

  // Function to open the modal and set the selected project
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
    setModalVisible(false);
  };

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.projectTitle && project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //onSubmit
  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    closeForm();
    event.preventDefault();
  
    const elements = event.currentTarget.elements as HTMLFormControlsCollection & {
      'project-title': HTMLInputElement;
      'project-description': HTMLTextAreaElement;
      'start-date': HTMLInputElement;
      'end-date': HTMLInputElement;
      'project-coordinator': HTMLInputElement;
      'team-name': HTMLInputElement;
      'project-department': HTMLInputElement;
      'concentration': HTMLInputElement;
      'project-status': HTMLInputElement;
    };
    // console.log(elements['project-description'].value);
    const formData = {
      projectTitle: elements['project-title'].value,
      projectDescription: elements['project-description'].value,
      startDate: elements['start-date'].value,
      endDate: elements['end-date'].value,
      projectCoordinator: elements['project-coordinator'].value,
      teamID: elements['team-name'].value,
      projectDepartment: elements['project-department'].value,
      concentration: elements['concentration'].value,
      projectStatus: elements['project-status'].value,
    };
    console.log(formData)
    const queryParams = new URLSearchParams(formData).toString();
  
    try {
      const response = await fetch(`http://localhost:8082/hello-world/add-project?${queryParams}`);
      if (response.ok) {
        alert('Project added successfully!');
        closeForm(); // Close the form after successful submission
      } else {
        alert('Failed to add project. Please try again later.');
      }
      // Handle response as needed
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };
  

  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <Header />
      <div className="repo-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0 }}>
        <p className="text-1">Unlock the Gateway to Knowledge: explore, Expand, and Excel with Our Project Repository!</p>
        <button className="add-project-btn" onClick={toggleFormVisibility}><i className="fas fa-plus"></i> Add a new project</button>
        <br />
        {isFormVisible && (
          <div className="popup">
            <div className="popup-content" style={{ maxHeight: '400px', overflowY: 'auto', padding: '20px' }}>
              <span className="close" onClick={toggleFormVisibility}>&times;</span><br /><br />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="project-name">Project Title:</label>
                  <input className="project-input" id="project-title" type="text" placeholder="Project Title" />
                </div>
                <div className="form-group">
                  <label htmlFor="project-description">Project Description:</label>
                  <textarea className="textbox-input" id="project-description" placeholder="Project Description"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="start-date">Start Date:</label>
                  <input id="start-date" type="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="end-date">End Date:</label>
                  <input id="end-date" type="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="project-coordinator">Project Coordinator:</label>
                  <input id="project-coordinator" type="text" placeholder="Project Coordinator" />
                </div>
                <div className="form-group">
                  <label htmlFor="team-name">Team Name:</label>
                  <input id="team-name" type="text" placeholder="Team Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="project-department">Project Department:</label>
                  <input id="project-department" type="text" placeholder="Project Department" />
                </div>
                <div className="form-group">
                  <label htmlFor="concentration">Concentration:</label>
                  <input id="concentration" type="text" placeholder="Concentration" />
                </div>
                <div className="form-group">
                  <label htmlFor="project-status">Project Status:</label>
                  <input id="project-status" type="text" placeholder="Project Status" />
                </div>
                <button type="submit">Submit</button>
              </form>

            </div>
          </div>
        )}
        <div className="filter-dropdown">
          <button className="filter-btn" onClick={toggleFilterDropdown}>
            <i className="fas fa-filter"></i> Filter projects
          </button>
          <button className="clear-btn" onClick={clearFilter}>Clear Filter</button>
          {showFilterDropdown && (
            <div className="dropdown-content">
              <input
                type="text"
                placeholder="Filter projects..."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />

            </div>
          )}
        </div>
        <br />
        <br />
        <table className="project-table">
          <thead>
            <tr>
              <th>Projects/Papers</th>
              <th>Project Coordinators</th>
              <th>Team</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project: Project, index: number) => (
              <tr key={index}>
                <td>{project.projectTitle}</td>
                <td>{project.projectCoordinator}</td>
                <td>
                  {project.teamId.map((user, index) => (
                    <div key={index}>
                      <div>{user.userName}</div>
                      {/* Add other user properties as needed */}
                    </div>
                  ))}
                </td>
                <td>
                  <button className="details-btn" onClick={() => openModal(project)}>
                    <i className="fas fa-info"></i> View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="footer">
        <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
      </footer>

      {/* Modal component */}
      <Modal
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {selectedProject && (
          <div >
          <h2>{selectedProject.projectTitle}</h2>
          <Card title="Project Details" style={{ width: 450 }}>
            <p><strong>Description:</strong> {selectedProject.projectDescription}</p>
            <p><strong>Start Date:</strong> {selectedProject.startDate}</p>
            <p><strong>End Date:</strong> {selectedProject.endDate}</p>
            <p><strong>Coordinator:</strong> {selectedProject.projectCoordinator}</p>
            <p><strong>Concentration:</strong> {selectedProject.concentration}</p>
            <p><strong>Status:</strong> {selectedProject.projectStatus}</p>
            <p><strong>Team:</strong></p>
            <ul>
              {selectedProject.teamId.map((member, index) => (
                <li key={index}>{member.userName}</li>
              ))}
            </ul>
          </Card>
        </div>
        )}
      </Modal>
    </div>
  );
};

export default Repository;
