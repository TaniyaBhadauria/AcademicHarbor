import React from 'react';
import './styles/AcademicHarborApp.css';
import backgroundImage from './images/background.png';
import homebutton from './images/home_button.png';
import notificationIcon from './images/Notification.png';
import NavigationHeader from '../src/pages/Component/Header';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AcademicHarborPage: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // const isLoggedIn = location.state && location.state.isLoggedIn;
  const handleSignInClick = () => {
    navigate('/login');
  };
  const handleSignUp = () => {
    navigate('/signup');
  };
  const handleReadMoreClick = () => {
    navigate('/help');
  };

  return (
    <div className="container">
      <NavigationHeader/>
      <main className="content" style={{ backgroundImage: `url(${backgroundImage})`, padding: '17vh 0',marginLeft:0,marginRight:0}}>
        <section className="hero" >
          <h1>Welcome to AcademicHarbor</h1>
          <p>
          At AcademicHarbor, we believe in the power of collaboration to drive academic excellence. Our platform connects students, researchers, 
          and scholars across disciplines, fostering innovation and knowledge exchange.
          </p>
          <p>
          Get Started Today!
          </p>
          <p>
          Sign up or log in to AcademicHarbor and unlock a world of possibilities. Whether you're a student eager to collaborate, a faculty member seeking cross-disciplinary innovation, or an external researcher ready to contribute, 
          AcademicHarbor welcomes you to a community that values collaboration, diversity, and the pursuit of knowledge.
          </p>
          <button className="get-started" onClick={handleReadMoreClick}>Read More</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AcademicHarborPage;
