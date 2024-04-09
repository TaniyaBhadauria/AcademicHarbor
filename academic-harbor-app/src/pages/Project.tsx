import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'
import './styles/Project.css'

interface ProjectFields {
  title: string;
  description: string;
  professor: string;
  department: string;
}

const Project: React.FC = () => {
  const [searchText, setSearchText] = useState('');
    const [department, setDepartment] = useState('');
    const [professorStudent, setProfessorStudent] = useState('');
    const [concentration, setConcentration] = useState('');
    const [projects, setProjects] = useState<ProjectFields[]>([
      {
        title: 'AI testing',
        description: 'AI testing involves the evaluation and validation of artificial intelligence systems to ensure their functionality, performance, and reliability.',
        professor: 'Dave, Sanya, Amber',
        department: 'IS'
      }
    ]);
    const navigate = useNavigate();

    const handleSearch = () => {
      // Implement your search logic here
      // For example, you could filter the projects based on the search criteria
      console.log('Searching for:', searchText, department, professorStudent, concentration);
    };

    const handleApply = (project: ProjectFields) => {
      // Implement your apply logic here
      // For example, you could navigate to an application page
      console.log('Applying for:', project);
      navigate('/apply');
    };

    const handleSave = (project: ProjectFields) => {
      // Implement your save logic here
      // For example, you could add the project to a user's saved projects
      console.log('Saving:', project);
    };



  return (
    <div className="container">
        <Header />
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100,marginLeft:0,marginRight:0}}>
    <main className="content">
            <h1>Discover a world of collaborations!</h1>
            <div className="filters">
              <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Department</option>
                <option value="IS">IS</option>
                {/* Add more department options */}
              </select>
              <select value={professorStudent} onChange={(e) => setProfessorStudent(e.target.value)}>
                <option value="">Professor/Student</option>
                <option value="Professor">Professor</option>
                <option value="Student">Student</option>
              </select>
              <select value={concentration} onChange={(e) => setConcentration(e.target.value)}>
                <option value="">Concentration</option>
                <option value="AI">AI</option>
                {/* Add more concentration options */}
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
            <div className="projects">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>Professor: {project.professor}</p>
                  <p>Department: {project.department}</p>
                  <div className="project-actions">
                    <button onClick={() => handleSave(project)}>View Details</button>
                    <button onClick={() => handleApply(project)}>Apply</button>
                    <button onClick={() => handleSave(project)}>Save</button>
                  </div>
                </div>
              ))}
            </div>
          </main>

    </div>
    <footer className="footer">
                <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
              </footer>
    </div>
  );
};

export default Project;