import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'
import './styles/SignIn.css'
import { FaUserPlus, FaInfoCircle } from 'react-icons/fa';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For example, you could make an API call to authenticate the user
    if (username === 'your_username' && password === 'your_password') {
      // If the login is successful, navigate to the home page
      sessionStorage.setItem('isUserLoggedIn', JSON.stringify(true));
      navigate('/');
    } else {
      // Display an error message or handle the login failure
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
        <Header />
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100,marginLeft:0,marginRight:0}}>
        <div className="centered-content">
      <h1>Welcome Back!</h1>
      <p>Please enter your credentials to login</p>
      <div className="input-group">
      <label>
              UserName<span className="compulsory">*</span> {/* Add asterisk for compulsory field */}
              <FaInfoCircle className="info-icon" title="Username is required for login" /> {/* Add info icon */}
    </label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div className="input-group">
     <label>
              Password<span className="compulsory">*</span> {/* Add asterisk for compulsory field */}
              <FaInfoCircle className="info-icon" title="Password is required for login" /> {/* Add info icon */}
            </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className="remember-me">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label>Remember me</label>
      </div>
      <button className="sign-in-button" onClick={handleLogin}>
            Sign In
            <FaUserPlus className="icon" /> {/* Add sign-up user icon */}
          </button>
          <div className="bottom-links">
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="signup">
              <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
          </div>
    </div>
    </div>
    </div>
  );
};

export default LoginPage;