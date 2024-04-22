import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaSave, FaEdit } from 'react-icons/fa';
import NavigationHeader from './Component/Header';
import backgroundImage from './images/background.png';
import { Layout, Menu, Form, Input, Button } from 'antd';
import './styles/Profile.css'; // Import CSS file for styling

const { Header, Content, Footer } = Layout;

interface UserData {
  userName: string;
  phone: string;
  role: string;
  linkedin: string;
  emailId: string;
  profilePicture: string;
  resumeId: string;
  password: string;
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserData | null>(null);

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString && !userData) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  const handleEditProfile = () => {
    setFormData(userData);
    setEditMode(true);
  };

  const handleSaveProfile = async () => {
    try {
      if (formData && userData) {
        const params = new URLSearchParams();
        params.append('username', formData.userName);
        params.append('email', formData.emailId);
        params.append('profilePicture', formData.profilePicture);
        params.append('linkedin', formData.linkedin);
        params.append('phone', formData.phone);
        params.append('role', formData.role);

        const response = await fetch(`http://localhost:8082/hello-world/update?${params.toString()}`, {
          method: 'POST'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Refresh userData stored in session after successful update
        handleSession();
        setEditMode(false);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  const handleSession = () => {
    if (userData) {
      fetch(`http://localhost:8082/hello-world/login?username=${userData.userName}&password=${encodeURIComponent(userData.password)}`)
        .then(response => {
          if (response.ok) {
            // If the response is successful, parse the JSON
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          // Check if the response data is valid
          if (data) {
            // If the login is successful, navigate to the home page or perform any other action
            sessionStorage.removeItem('userData');
            sessionStorage.setItem('userData', JSON.stringify(data));
            const userDataString = sessionStorage.getItem('userData');
                if (userDataString && !userData) {
                  setUserData(JSON.parse(userDataString));
                }
          } else {
            // Display an error message or handle the login failure
            alert('Invalid username or password');
          }
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('Error fetching data:', error);
          alert('An error occurred during login. Please try again later.');
        });
        }
    };


  const handleFormChange = (changedFields: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      ...changedFields,
    }));
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
                      <div className="detail">
                        <span>{userData.role}</span>
                      </div>
                      <div className="detail">
                        <FaPhone />
                        <span>{userData.phone}</span>
                      </div>
                      {editMode ? (
                        <>
                          <Button type="primary" icon={<FaSave />} onClick={handleSaveProfile} style={{ marginRight: '8px' }}>Save</Button>
                        </>
                      ) : (
                        <Button type="primary" icon={<FaEdit />} onClick={handleEditProfile} style={{ marginRight: '8px' }}>Edit</Button>
                      )}
                    </div>
                    <div className="form-container">
                      <Form
                        layout="vertical"
                        initialValues={userData}
                        onValuesChange={handleFormChange}
                      >
                        <Form.Item label="User Name" name="userName">
                          <Input disabled={!editMode} />
                        </Form.Item>
                        <Form.Item label="Contact Number" name="phone">
                          <Input disabled={!editMode} />
                        </Form.Item>
                        <Form.Item label="User Title" name="role">
                          <Input disabled={!editMode} />
                        </Form.Item>
                        <Form.Item label="Linkedin" name="linkedin">
                          <Input disabled={!editMode} />
                        </Form.Item>
                        <Form.Item label="University Email Address" name="emailId">
                          <Input disabled={!editMode} />
                        </Form.Item>
                        {editMode && (
                          <Form.Item label="Profile Picture" name="profilePicture">
                            <Input />
                          </Form.Item>
                        )}
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
