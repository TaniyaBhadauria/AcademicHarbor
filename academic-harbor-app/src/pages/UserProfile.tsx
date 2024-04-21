import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaSearch, FaPhoneSquare, FaEnvelopeSquare, FaCommentAlt } from 'react-icons/fa';
import NavigationHeader from './Component/Header';
import backgroundImage from './images/background.png';
import { Breadcrumb, Layout, Menu, AutoComplete, Button, theme, Form, Input } from 'antd';
import './styles/UserProfile.css';

const { Header, Content, Footer } = Layout;
const { Option } = AutoComplete;

interface UserProfileProps {
  userName: string;
  title: string;
  emailId: string;
  phone: string;
  role: string;
  profilePicture: string;
  linkedin: string;
}

const UserProfile: React.FC = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfileProps[]>([]);
  const [filteredUserProfiles, setFilteredUserProfiles] = useState<UserProfileProps[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('1');
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8082/hello-world/users');
        if (response.ok) {
          const data = await response.json();
          setUserProfiles(data);
        } else {
          console.error('Failed to fetch user profiles:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profiles:', error);
      }
    };

    fetchData();
  }, []);

  const handleMenuClick = (e: any) => {
    setActiveTab(e.key);
  };

  const onSearch = (value: string) => {
    setSearchValue(value);
    filterUserProfiles(value);
  };

  const filterUserProfiles = (searchValue: string) => {
    const filteredData = userProfiles.filter(profile =>
      profile.userName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUserProfiles(filteredData);
    setShowResults(false);
  };

  const handleSearchButtonClick = () => {
    const filteredData = userProfiles.filter(profile =>
      profile.userName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUserProfiles(filteredData);
    setShowResults(true);
    console.log("Selected user:", searchValue);
  };

  const renderOption = (profile: UserProfileProps) => (
    <Option key={profile.userName} value={profile.userName}>
      {profile.userName}
    </Option>
  );

  return (
    <div className="container">
      <NavigationHeader />
      <div className="app" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0 }}>
        <header className="app-header">
          <AutoComplete
            value={searchValue}
            dataSource={filteredUserProfiles.map(renderOption)}
            onSelect={value => setSearchValue(value)}
            onSearch={onSearch}
            placeholder="Search students or professors."
            style={{ width: 400 }}
          />
          <Button type="primary" icon={<FaSearch />} onClick={handleSearchButtonClick} />
        </header>

        {showResults && (
          <Layout className="layout" style={{ minHeight: '50vh', minWidth: '100vh', marginRight: 100 }} >
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
                  filteredUserProfiles.map((profile, index) => (
                    <div className="user-profile" key={index}>
                      <div className="profile-layout">
                        <div className="profile-header">
                          <div className="profile-picture">
                            <img src={profile.profilePicture} alt="Profile" className="profile-img" />
                          </div>
                          <h2>{profile.userName}</h2>
                          <p className="title">{profile.title}</p>
                          <div className="detail">
                            <span>{profile.role}</span>
                          </div>
                          <div className="detail">
                            <FaPhone />
                            <span>{profile.phone}</span>
                          </div>
                          <div className="actions">
                            <Button type="primary" icon={<FaPhoneSquare />} className="action-button">Call</Button>
                            <Button type="primary" icon={<FaCommentAlt />} className="action-button">Message</Button>
                            <Button type="primary" icon={<FaEnvelopeSquare />} className="action-button">Email</Button>
                          </div>
                        </div>
                        <div className="form-container">
                          <Form layout="vertical">
                            <Form.Item label="User Name">
                              <Input value={profile.userName} disabled />
                            </Form.Item>
                            <Form.Item label="Contact Number">
                              <Input value={profile.phone} disabled />
                            </Form.Item>
                            <Form.Item label="User Title">
                              <Input value={profile.role} disabled />
                            </Form.Item>
                            <Form.Item label="Linkedin">
                              <Input value={profile.linkedin} disabled />
                            </Form.Item>
                            <Form.Item label="University Email Address">
                              <Input value={profile.emailId} disabled />
                            </Form.Item>
                          </Form>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </main>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <button className="download-btn"><FaDownload /> Download Resume</button>
            </Footer>
          </Layout>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
