import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png';
import Header from './Component/Header';
import './styles/SignUp.css'; // Import your custom CSS for sign-up page styling
import { Button, Form, Input } from 'antd';
import { FaUserPlus } from 'react-icons/fa';

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch(`http://localhost:8082/hello-world/register?username=${values.username}&password=${values.password}&email=${values.email}`);
      if (response.ok) {
        const data = await response.text();
        console.log(data); // log success message
        navigate('/login');
      } else {
        console.error('Failed to register user:', response.statusText);
        // handle registration failure
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // handle registration failure
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <Header />
      <div className="signup-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Sign Up</h3>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 800, textAlign: 'left' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email Id!' }]}
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
          <Form.Item
            label="Confirm Password"
            name="confirm_password"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password />
          </Form.Item>

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
