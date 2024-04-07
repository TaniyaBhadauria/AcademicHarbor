import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import Header from './Component/Header'
import './styles/Repository.css'

const Repository: React.FC = () => {

  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <Header />
      <div className="repo-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0 }}>
        <p className="text-1">Unlock the Gateway to Knowledge: explore, Expand, and Excel with Our Project Repository!</p>
        <button className="add-project-btn"><i className="fas fa-plus"></i> Add Add a new project</button>
        <br/>
        <button className="add-project-btn"><i className="fas fa-filter"></i> Filter project repository</button>
        <br/>
        <br/>
        <table className="project-table">
        <thead>
          <tr>
            <th>Projects/Papers</th>
            <th>Project Coordinators</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project 1</td>
            <td>Coordinator 1</td>
            <td>Team Members 1</td>
            <button className="details-btn"><i className="fas fa-info"></i> View more details</button>
          </tr>
          <tr>
            <td>Project 2</td>
            <td>Coordinator 2</td>
            <td>Team Members 2</td>
            <button className="details-btn"><i className="fas fa-info"></i> View more details</button>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table> 
      </div>
    </div>
  );
};

export default Repository;