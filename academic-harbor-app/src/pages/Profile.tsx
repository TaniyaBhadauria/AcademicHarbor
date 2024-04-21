import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaSave, FaEdit } from 'react-icons/fa';
import NavigationHeader from './Component/Header';
import backgroundImage from './images/background.png';
import { Layout, Menu, Form, Input, Button } from 'antd';
import './styles/Profile.css'; // Import CSS file for styling

const { Header, Content, Footer } = Layout;

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const userDataString = sessionStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const handleEditProfile = () => {
    // Add functionality to handle editing the profile
    console.log('Editing profile...');
  };

  const handleSaveProfile = () => {
    // Add functionality to handle saving the profile
    console.log('Saving profile...');
  };

  if (!userData) {
    // Handle the case where userData is not available
    return <div>User data not found!</div>;
  }

  const handleMenuClick = (e: any) => {
    setActiveTab(e.key);
  };

  return (
    <div className="container">
      <NavigationHeader />
      <div className="layout-container" style={{ backgroundImage: `url(${backgroundImage})`, padding: '0 100px' }}>
        <div className="profile-heading" style={{ padding: '50px 0' }}>
          <h2>My Profile</h2>
        </div>
        <Layout className="layout" style={{ minHeight: '50vh', minWidth: '100vh' }}>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ flex: 1, minWidth: 0 }}
              onClick={handleMenuClick}
              items={[
                { key: '1', label: 'About' },
                { key: '2', label: 'Projects/Papers' },
                { key: '3', label: 'Achievements' },
              ]}
            />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <main className="site-layout-content">
              {activeTab === '1' && (
                <div className="user-profile">
                  <div className="profile-layout">
                    <div className="profile-header">
                      <div className="profile-picture">
                        <img src={userData.profilePicture} alt="Profile" className="profile-img" />
                      </div>
                      <h2>{userData.userName}</h2>
                      <p className="title">{userData.title}</p>
                      <div className="detail">
                        <span>{userData.role}</span>
                      </div>
                      <div className="detail">
                        <FaPhone />
                        <span>{userData.phone}</span>
                      </div>
                      <Button type="primary" icon={<FaEdit />} onClick={handleEditProfile} style={{ marginRight: '8px' }}>Edit</Button>
                      <Button type="primary" icon={<FaSave />} onClick={handleSaveProfile}>Save</Button>
                    </div>
                    <div className="form-container">
                      <Form layout="vertical">
                        <Form.Item label="User Name">
                          <Input value={userData.userName} disabled />
                        </Form.Item>
                        <Form.Item label="Contact Number">
                          <Input value={userData.phone} disabled />
                        </Form.Item>
                        <Form.Item label="User Title">
                          <Input value={userData.role} disabled />
                        </Form.Item>
                        <Form.Item label="Linkedin">
                          <Input value={userData.linkedin} disabled />
                        </Form.Item>
                        <Form.Item label="University Email Address">
                          <Input value={userData.emailId} disabled />
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <button className="download-btn"><FaDownload /> Download Resume</button>
          </Footer>
        </Layout>
      </div>
    </div>
  );
};

export default Profile;
