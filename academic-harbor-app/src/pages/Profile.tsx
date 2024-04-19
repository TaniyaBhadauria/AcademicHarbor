import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload } from 'react-icons/fa';
import NavigationHeader from './Component/Header';
import backgroundImage from './images/background.png';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const userDataString = sessionStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;

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
              <h1>My profile!</h1>
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
                  <div className="profile-header">
                    <h2>{userData.userName}</h2>
                    <p className="title">{userData.title}</p>
                  </div>
                  <div className="profile-details">
                    <div className="detail">
                      <FaEnvelope />
                      <span>{userData.email}</span>
                    </div>
                    <div className="detail">
                      <FaPhone />
                      <span>{userData.phone}</span>
                    </div>
                    <div className="detail">
                      <FaLinkedin />
                      <a href={`https://linkedin.com/${userData.linkedin}`} target="_blank" rel="noopener noreferrer">
                        {userData.linkedin}
                      </a>
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
