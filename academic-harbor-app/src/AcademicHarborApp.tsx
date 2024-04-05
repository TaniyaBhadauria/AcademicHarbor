import React from 'react';
import './styles/AcademicHarborApp.css';
import backgroundImage from './images/background.png';
import homebutton from './images/home_button.png';
import notificationIcon from './images/Notification.png';

const AcademicHarborPage: React.FC = () => {
  return (
    <div className="container">
      <header className="headerlogo">
        <div className="logo">
          <img src="https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/19e68b70-358e-4b40-a5fb-92dfcc0ae589/Rendition/low-res/Content/Public" alt="UMBC Logo" />
        </div>
        </header>
        <header className="headergap">
        </header>
        <header className="header">
        <nav className="navbar">
          <ul>
            <li><a href="#" ><img src={homebutton} alt="Home Logo" height='15'/>
        AcademicHarbor</a></li>
            <li><a href="#">Repository</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">User Profiles</a></li>
            <li><a href="#">Inbox</a></li>
            <li>
          <a href="#" className="notification-icon"><img src={notificationIcon} alt="Notification Icon" height={30} /></a>
            </li>
              <button className="sign-in">Sign In</button>
              <button className="sign-up">Sign Up</button>
          </ul>
        </nav>
      </header>

      <main className="content" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100,marginLeft:0,marginRight:0}}>
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
          <button className="get-started">Read More</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AcademicHarborPage;
