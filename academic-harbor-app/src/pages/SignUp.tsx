import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png';
import Header from './Component/Header';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { FaUserPlus, FaInfoCircle } from 'react-icons/fa';

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

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
      <div className="signup-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Sign Up</h3>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 800 ,textAlign: 'left' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email Id!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            label="Confirm Password"
            name="confirm_password"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className='custom-button' style={{ backgroundColor: 'black', color: 'white' }}>
              <FaUserPlus className="icon" />Sign Up
            </Button>
          </Form.Item>
        </Form>
        <p className="forgot-password text-right">
          Already a member? <a href="/login">Sign in</a>
        </p>
      </div>
      <footer className="footer">
              <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
            </footer>
    </div>
  );
};

export default SignUp;
