import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'

const Repository: React.FC = () => {

  return (
    <div className="container">
        <Header />
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100,marginLeft:0,marginRight:0}}>
      <h1>Repository</h1>
      <p></p>
          </div>
          </div>
  );
};

export default Repository;