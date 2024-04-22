import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'
import './styles/SignIn.css'
import { FaUserPlus, FaInfoCircle } from 'react-icons/fa';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    if (values.username!='' && values.password!='') {
          setUsername(values.username);
          setPassword(values.password);
          setRememberMe(values.remember);
          handleLogin();
        }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogin = () => {
  if (username!='' && password!='') {
    fetch(`http://localhost:8082/hello-world/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
      .then(response => {
        if (response.ok) {
          // If the response is successful, parse the JSON
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        // Check if the response data is valid
        if (data) {
          // If the login is successful, navigate to the home page or perform any other action
          sessionStorage.setItem('userData', JSON.stringify(data));
          sessionStorage.setItem('isUserLoggedIn', JSON.stringify(true));
          navigate('/');
        } else {
          // Display an error message or handle the login failure
          alert('Invalid username or password');
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching data:', error);
        alert('An error occurred during login. Please try again later.');
      });
      }
  };

  return (
    <div className="container">
      <Header />
      <div className="signup-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="centered-content">
          <h1>Welcome Back!</h1>
          <p>Please enter your credentials to login</p>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: 'black', color: 'white' }} >
               <FaUserPlus className="icon" /> Sign In
              </Button>
            </Form.Item>
          </Form>
          <div className="bottom-links">
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="signup">
              <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
       <footer className="footer">
                    <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
                  </footer>
    </div>
  );
};

export default LoginPage;
