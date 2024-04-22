import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png';
import Header from './Component/Header';
import { Modal } from 'antd';
import './styles/Project.css';

interface UserProfileProps {
  userName: string;
  title: string;
  emailId: string;
  phone: string;
  role: string;
  profilePicture: string;
  linkedin: string;
}

interface ProjectFields {
  projectId: number;
  projectTitle: string;
  projectDescription: string;
  projectCoordinator: string;
  projectDepartment: string;
  concentration: string;
  projectStatus: string;
  startDate: string;
  teamId: UserProfileProps[];
}

const Project: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [departmentOptions, setDepartmentOptions] = useState<string[]>([]);
  const [projectCoordinatorOptions, setProjectCoordinatorOptions] = useState<string[]>([]);
  const [concentrationOptions, setConcentrationOptions] = useState<string[]>([]);
  const [department, setDepartment] = useState('');
  const [projectCoordinator, setProjectCoordinator] = useState('');
  const [concentration, setConcentration] = useState('');
  const [projects, setProjects] = useState<ProjectFields[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectFields[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectFields | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []); // Empty dependency array to run only once on component mount

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:8082/hello-world/all-projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        extractDropdownOptions(data);
      } else {
        console.error('Failed to fetch projects:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const extractDropdownOptions = (data: ProjectFields[]) => {
    const departments = Array.from(new Set(data.map(project => project.projectDepartment)));
    const professorStudentRoles = Array.from(new Set(data.map(project => project.projectCoordinator))); // Assuming fixed values for this dropdown
    const concentrations = Array.from(new Set(data.map(project => project.concentration)));

    setDepartmentOptions(['', ...departments]);
    setProjectCoordinatorOptions(['', ...professorStudentRoles]);
    setConcentrationOptions(['', ...concentrations]);
  };

  const handleSearch = () => {
    filterProjects();
    setShowResults(true);
  };

  const filterProjects = () => {
    let filtered = projects;

    if (searchText.trim() !== '') {
      const searchRegex = new RegExp(searchText, 'i');
      filtered = filtered.filter(project => searchRegex.test(project.projectTitle));
    } else {
      if (department !== '') {
        filtered = filtered.filter(project => project.projectDepartment === department);
      }
      if (projectCoordinator !== '') {
        filtered = filtered.filter(project => project.projectCoordinator === projectCoordinator);
      }
      if (concentration !== '') {
        filtered = filtered.filter(project => project.concentration === concentration);
      }
    }

    setFilteredProjects(filtered);
  };

  const handleApply = (project: ProjectFields) => {
    console.log('Applying for:', project);
    navigate('/apply');
  };

  const handleSave = (project: ProjectFields) => {
    console.log('Saving:', project);
  };

  const handleViewDetails = (project: ProjectFields) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalVisible(false);
  };

  return (
    <div className="container">
      <Header />
      <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` , padding: '17vh 0', marginLeft:0,marginRight:0, marginBottom:0}}>
        <main className="project-content">
          <h1>Discover a world of collaborations!</h1>
          <div className="filters">
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">Department</option>
              {departmentOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <select value={projectCoordinator} onChange={(e) => setProjectCoordinator(e.target.value)}>
              <option value="">Project Coordinator</option>
              {projectCoordinatorOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <select value={concentration} onChange={(e) => setConcentration(e.target.value)}>
              <option value="">Concentration</option>
              {concentrationOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Browse projects and research papers"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          {showResults && (
            <div className="projects">
              {filteredProjects.map((project) => (
                <div key={project.projectId} className="project-card">
                  <h3>{project.projectTitle}</h3>
                  <p>{project.projectDescription}</p>
                  <p>Coordinator: {project.projectCoordinator}</p>
                  <p>Department: {project.projectDepartment}</p>
                  <p>Concentration: {project.concentration}</p>
                  <div className="project-actions">
                    <button onClick={() => handleViewDetails(project)}>View Details</button>
                    <button onClick={() => handleApply(project)}>Apply</button>
                    <button onClick={() => handleSave(project)}>Save</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
      </footer>
      {selectedProject && (
        <Modal
          title={selectedProject.projectTitle}
          visible={modalVisible}
          onCancel={closeModal}
          footer={null}
        >
          <p>Description: {selectedProject.projectDescription}</p>
          <p>Coordinator: {selectedProject.projectCoordinator}</p>
          <p>Department: {selectedProject.projectDepartment}</p>
          <p>Concentration: {selectedProject.concentration}</p>
          <p>Project Status: {selectedProject.projectStatus}</p>
          <p>Start Date: {selectedProject.startDate}</p>
          <div>
            <h4>Team Members:</h4>
            <ul>
              {selectedProject.teamId.map((user, index) => (
                <li key={index}>
                  <div>{user.userName}</div>
                  <div>{user.role}</div>
                  {/* Add other user properties as needed */}
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Project;
