import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcademicHarborPage from './AcademicHarborApp';
import LoginPage from './pages/SignIn';
import SignUp from './pages/SignUp';
import Repository from './pages/Repository';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import UserProfile from './pages/UserProfile';
import Project from './pages/Project';
import Profile from './pages/Profile';

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
