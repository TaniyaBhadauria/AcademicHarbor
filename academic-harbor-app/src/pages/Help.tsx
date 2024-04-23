import React from 'react';
import './styles/Help.css';
import backgroundImage from './images/background.png';
import NavigationHeader from '../pages/Component/Header';
import { useNavigate } from 'react-router-dom';

const Help: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <NavigationHeader />
      <main className="content" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <section className="section">
          <h2>Login</h2>
          <p>
            Existing users can access their accounts by entering their credentials (username and password) on the login page.
          </p>
        </section>


        <section className="section">
          <h2>Sign-up</h2>
          <p>
            New users can create an account by providing necessary information such as username, email, and password. The sign-up process also includes confirming the password.
          </p>
        </section>

        <section className="section">
          <h2>Repository</h2>
          <p>
            The Repository page displays a list of projects and research papers available in the repository. Users can add new projects, filter existing projects, and view more details about each project, including the project coordinator and team members assigned to it.
          </p>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <p>
            The Projects page provides a detailed view of a specific project or research paper. Users can browse projects based on different filters such as department, professor/student, and concentration area. The page displays project descriptions, associated professors or researchers, department information, and options to view further details, apply to join the project, or save it for later reference.
          </p>
        </section>

        <section className="section">
          <h2>User Profiles</h2>
          <p>
            The User Profiles page displays profile information of a particular user, including their name, designation, department or division, contact details (email, phone, LinkedIn), and a brief about section. Users can also download the resume or CV from this page.
          </p>
          <p>
            Subcategories of the User Profiles page include:
          </p>
          <ul>
            <li>User profile editing page</li>
            <li>Project application tracking page</li>
            <li>Project application management page</li>
            <li>Saved Projects page</li>
          </ul>
        </section>

        <section className="section">
          <h2>Inbox</h2>
          <p>
            The Inbox page allows users to view and manage their messages or communication within the platform. Users can select specific contacts from a list, and the main area displays the conversation thread with the selected contact. This page facilitates direct communication between users, which could be useful for project collaborations or general inquiries.
          </p>
        </section>

        <section className="section">
          <h2>Notifications</h2>
          <p>
            The Notifications page displays a list of recent alerts or messages regarding project selections, application status updates, or any other relevant information. Notifications are accompanied by user icons or initials, making it easy to identify the sender or context of each notification. Pagination controls are available to navigate through multiple pages of notifications.
          </p>
        </section>

        <section className="section">
          <h2>Back to Home</h2>
          <button className="back-button" onClick={handleBackToHome}>Back to Home</button>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Help;