import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaSearch, FaPhoneSquare, FaEnvelopeSquare, FaCommentAlt } from 'react-icons/fa';
import { Modal, Breadcrumb, Layout, Menu, AutoComplete, Button, Form, Input } from 'antd';
import NavigationHeader from './Component/Header';
import backgroundImage from './images/background.png';
import './styles/UserProfile.css';
import Chat from './Chat';

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
  const [emailModalVisible, setEmailModalVisible] = useState<boolean>(false);
  const [emailForm] = Form.useForm();
  const [selectedProfileEmail, setSelectedProfileEmail] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [myEmail, setMyEmail] = useState<string>('');
  const [showChatModal, setShowChatModal] = useState(false); // Add state for chat modal visibility
  const userDataString = sessionStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;
   const [resumeData, setResumeData] = useState<any | null>(null);

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
    fetchResumeDetails();
  }, []);

  const handleMenuClick = (e: any) => {
    setActiveTab(e.key);
  };

  const onSearch = (value: string) => {
    setSearchValue(value);
    filterUserProfiles(value);
  };
   const fetchResumeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8082/hello-world/resumedetails?resumeID=${userData?.resumeId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
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

  const handleEmailButtonClick = (profile: UserProfileProps) => {
    setSelectedProfileEmail(profile.userName);
    setMyEmail(userData.userName);
    setUserEmail(profile.userName);
    setEmailModalVisible(true);
  };

  const handleEmailModalOk = () => {
    setEmailModalVisible(false);
  };

  const handleEmailModalCancel = () => {
    setEmailModalVisible(false);
  };

  const sendEmail = async (subject: string, messageBody: string) => {
    const values = emailForm.getFieldsValue();
    try{
    const response = await fetch(`http://localhost:8082/hello-world/send-message?description=${values.subject}&senderId=${values.from}&recipientId=${values.to}&subject=${values.subject}&body=${values.messageBody}`);
          if (response.ok) {
            // Handle success response
            console.log('Email sent successfully');
          } else {
            // Handle error response
            console.error('Failed to send email:', response);
          }
        } catch (error) {
          // Handle validation errors
          console.error('Error sending email:', error);
        }

    console.log('Email Values:', values);
    console.log('Email Values:', subject);
    // Send email logic here
    setEmailModalVisible(false);
  };

  const handleChatButtonClick = () => {
    setShowChatModal(true); // Show chat modal
  };

  const handleChatModalClose = () => {
    setShowChatModal(false); // Hide chat modal
  };

  return (
    <div className="container">
      <NavigationHeader />
      <div className="app" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0 }}>
      <div><h3> Welcome to the User Profiles Hub :

           Discover detailed profiles of all members, featuring their name,
           designation, contact details, projects and their education.
           </h3>
           </div>
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
                  { key: '2', label: 'Education' },
                  { key: '3', label: 'Projects/Papers' },
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
                            <Button type="primary" icon={<FaPhoneSquare />} style={{ marginRight: '8px' }} className="action-button">Call</Button>
                            {/* Modify the onClick handler to open the chat modal */}
                            <Button type="primary" icon={<FaEnvelopeSquare />} style={{ marginRight: '8px' }} className="action-button" onClick={() => handleEmailButtonClick(profile)}>Email</Button>
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
                {activeTab === '2' && (
                         filteredUserProfiles.map((profile, index) => (
                                <div className="user-profile">
                                  <div className="profile-layout">
                                    <div className="profile-header">
                                      <div className="profile-picture">
                                        <img src={profile.profilePicture} alt="Profile" className="profile-img" />
                                      </div>
                                      <h2>{profile.userName}</h2>
                                      <div className="detail">
                                        <span>{profile.role}</span>
                                      </div>
                                      <div className="detail">
                                        <FaPhone />
                                        <span>{profile.phone}</span>
                                      </div>
                                    </div>
                                    <div className="form-container">
                                      <Form
                                        layout="vertical"
                                        initialValues={resumeData}
                                      >
                                        <Form.Item label="Education" name="education">
                                          {resumeData && resumeData.education.map((edu: any, index: number) => (
                                            <div key={index}>
                                              <Input.TextArea
                                                autoSize={{ minRows: 3, maxRows: 5 }}
                                                value={`${edu.degree} - ${edu.year} - ${edu.university}`}
                                              />
                                            </div>
                                          ))}
                                        </Form.Item>
                                        <Form.Item label="Experience" name="experience">
                                          {resumeData && resumeData.experience.map((edu: any, index: number) => (
                                            <div key={index}>
                                              <Input.TextArea
                                                autoSize={{ minRows: 3, maxRows: 5 }}
                                                value={`${edu.position} - ${edu.duration} - ${edu.company}`}
                                              />
                                            </div>
                                          ))}
                                        </Form.Item>
                                      </Form>
                                    </div>
                                  </div>
                                </div>
                              ))
                             ) }
                              {activeTab === '3' && (
                              filteredUserProfiles.map((profile, index) => (
                                                              <div className="user-profile">
                                                                <div className="profile-layout">
                                                                  <div className="profile-header">
                                                                    <div className="profile-picture">
                                                                      <img src={profile.profilePicture} alt="Profile" className="profile-img" />
                                                                    </div>
                                                                    <h2>{profile.userName}</h2>
                                                                    <div className="detail">
                                                                      <span>{profile.role}</span>
                                                                    </div>
                                                                    <div className="detail">
                                                                      <FaPhone />
                                                                      <span>{profile.phone}</span>
                                                                    </div>
                                                                  </div>
                                                                  <div className="form-container">
                                                                    <Form
                                                                      layout="vertical"
                                                                      initialValues={resumeData}
                                                                    >
                                                                      <Form.Item label="Projects" name="projects">
                                                                        {resumeData && resumeData.projects.map((edu: any, index: number) => (
                                                                          <div key={index}>
                                                                            <Input.TextArea
                                                                              autoSize={{ minRows: 3, maxRows: 5 }}
                                                                              value={`${edu.title} - ${edu.duration} - ${edu.description}`}
                                                                            />
                                                                          </div>
                                                                        ))}
                                                                      </Form.Item>
                                                                    </Form>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            ))
                                                                                         ) }
              </main>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <button className="download-btn"><FaDownload /> Download Resume</button>
            </Footer>
          </Layout>
        )}

        <Modal
          title="Send Email"
          visible={emailModalVisible}
          onOk={handleEmailModalOk}
          onCancel={handleEmailModalCancel}
          footer={[
            <Button key="back" onClick={handleEmailModalCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={() => sendEmail(emailForm.getFieldValue('subject'), emailForm.getFieldValue('messageBody'))}>
              Send
            </Button>,
          ]}
        >
          <Form
            form={emailForm}
            layout="vertical"
            name="email_form"
          >
            <Form.Item
              name="to"
              label="To"
              initialValue={selectedProfileEmail}
              rules={[{ required: true, message: 'Please input the recipient email!' }]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              name="from"
              label="From"
              initialValue={myEmail}
              rules={[{ required: true, message: 'Please input your email address!' }]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
                          name="subject"
                          label="Subject"
                          rules={[{ required: true, message: 'Please input the subject of mail!' }]}
                        >
                          <Input.TextArea rows={2} />
                        </Form.Item>
            <Form.Item
              name="messageBody"
              label="Message Body"
              rules={[{ required: true, message: 'Please input the message body!' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Form>
        </Modal>

        {/* Render the chat component within a modal */}
        <Modal
          title="Chat"
          visible={showChatModal}
          onCancel={handleChatModalClose}
          footer={null}
        >
          <Chat />
        </Modal>
      </div>
    </div>
  );
}

export default UserProfile;
