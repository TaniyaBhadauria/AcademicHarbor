import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AcademicHarborPage from './AcademicHarborApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/SignIn'
import SignUp from './pages/SignUp'
import Repository from './pages/Repository'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile'
import Project from './pages/Project';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AcademicHarborPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
