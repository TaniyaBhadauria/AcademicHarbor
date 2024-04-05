import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100,marginLeft:0,marginRight:0}}>
      <h1>Sign Up!</h1>
      <p>Please enter your credentials to login</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="remember-me">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label>Remember me</label>
      </div>
      <button onClick={handleLogin}>Sign In</button>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
      <div className="sign-up">
        <p>Don't have an account?</p>
        <a href="#">Sign Up</a>
      </div>
    </div>
    </div>
  );
};

export default SignUp;