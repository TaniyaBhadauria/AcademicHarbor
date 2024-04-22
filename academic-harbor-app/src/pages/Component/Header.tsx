import React from 'react';
import './styles/AcademicHarborApp.css';
import homebutton from './images/home_button.png';
import notificationIcon from './images/Notification.png';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';

interface HeaderProps {
  isLoggedIn?: boolean;
}  
const Header: React.FC<HeaderProps> = () => {

  const isLoggedInString = sessionStorage.getItem('isUserLoggedIn');
  const isLoggedIn = isLoggedInString ? JSON.parse(isLoggedInString) : false;
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/login');
  };
  const handleSignUp = () => {
    navigate('/signup');
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isUserLoggedIn');
    sessionStorage.removeItem('userData');
    navigate('/');
  };
  const navigateProfile = () => {
      navigate('/profile');
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
              <li><a href="/" ><img src={homebutton} alt="Home Logo" height='15'/> AcademicHarbor</a></li>
              <li><a href="/repository">Repository</a></li>
              <li><a href="/projects">Projects</a></li>
              {isLoggedIn ? (
                <React.Fragment>
                  <li><a href="/user_profile">User Profiles</a></li>
                  <li><a href="/messages">Inbox</a></li>
                  <li>
                    <a href="notifications" className="notification-icon"><img src={notificationIcon} alt="Notification Icon" height={30} /></a>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li><a className="disabled-link">User Profiles</a></li>
                  <li><a className="disabled-link">Inbox</a></li>
                  <li>
                    <div className="notification-icon disabled-link"><img src={notificationIcon} alt="Notification Icon" height={30} /></div>
                  </li>
                </React.Fragment>
              )}
              {isLoggedIn ? (
                <li>
                  <div className="user-profile-icon">
                    <button onClick={toggleDropdown}>
                      <AiOutlineUser size={20} />
                    </button>
                    {isDropdownOpen && (
                      <div className="dropdown-content">
                        <li><button onClick={navigateProfile}>Profile</button></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <React.Fragment>
                  <li><button className="sign-in" onClick={handleSignInClick}>Sign In</button></li>
                  <li><button className="sign-up" onClick={handleSignUp}>Sign Up</button></li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      </div>
    );
    
};

export default Header;

