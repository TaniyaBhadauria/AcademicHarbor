import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png';
import Header from './Component/Header';
import './styles/SignUp.css'; // Import your custom CSS for sign-up page styling

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For example, you could make an API call to authenticate the user
    if (username === 'your_username' && password === 'your_password') {
      // If the login is successful, navigate to the home page
      navigate('/home');
    } else {
      // Display an error message or handle the login failure
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 30, marginLeft: 0, marginRight: 0, textAlign: 'center' }}>
        <form className="signup-form">
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="Enter first name" />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" placeholder="Enter last name" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
            Already registered? <a href="/sign-in">Sign in</a>
          </p>
        </form>
      </div>
      <footer className="footer">
              <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
            </footer>
    </div>
  );
};

export default SignUp;
