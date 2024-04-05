import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'

const Messages: React.FC = () => {
  return (
    <div className="container">
        <Header />
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100,marginLeft:0,marginRight:0}}>
      <h1>Messages</h1>
      <p>Please enter your credentials to login</p>
    </div>
    </div>
    
  );
};

export default Messages;