import React from 'react';
import './styles/AcademicHarborApp.css';
import homebutton from './images/home_button.png';
import notificationIcon from './images/Notification.png';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/login');
  };
  const handleSignUp = () => {
    navigate('/signup');
  };

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
            <li><a href="/" ><img src={homebutton} alt="Home Logo" height='15'/>
        AcademicHarbor</a></li>
            <li><a href="/repository">Repository</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/user_profile">User Profiles</a></li>
            <li><a href="/messages">Inbox</a></li>
            <li>
          <a href="notifications" className="notification-icon"><img src={notificationIcon} alt="Notification Icon" height={30} /></a>
            </li>
              <button className="sign-in" >Sign In</button>
              <button className="sign-up" >Sign Up</button>
          </ul>
        </nav>
      </header>
      </div>
 );
};

export default Header;

