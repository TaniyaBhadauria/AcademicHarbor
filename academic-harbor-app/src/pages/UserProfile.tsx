import React, {useState} from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import NavigationHeader from './Component/Header';
import backgroundImage from './images/background.png'
import { Breadcrumb, Layout, Menu, Input } from 'antd';
import './styles/UserProfile.css'
import type { SearchProps } from 'antd/es/input/Search';
import { FaDownload } from 'react-icons/fa';

const { Search } = Input;

interface UserProfileProps {
  userName: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
}


const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const testUserProfiles: UserProfileProps[] = [
  {
    userName: 'Sydney Coleman',
    title: 'Assistant Professor, Division of Biomedical Sciences, University of Maryland, Baltimore County',
    email: 'scolemanc@umbc.edu',
    phone: '443-555-1234',
    linkedin: 'sydney-coleman-123456',
  },
];

const UserProfiles: React.FC<UserProfileProps> = ({
  userName,
  title,
  email,
  phone,
  linkedin,
}) => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="profile-picture.jpg" alt="Profile" />
        <h2>{userName}</h2>
        <p className="title">{title}</p>
      </div>
      <div className="profile-details">
        <div className="detail">
          <FaEnvelope />
          <span>{email}</span>
        </div>
        <div className="detail">
          <FaPhone />
          <span>{phone}</span>
        </div>
        <div className="detail">
          <FaLinkedin />
          <a href={`https://linkedin.com/${linkedin}`} target="_blank" rel="noopener noreferrer">
            {linkedin}
          </a>
        </div>
      </div>
    </div>
  );
};
const { Header, Content, Footer } = Layout;

const UserProfile: React.FC = () => {
  const [userProfiles, setUserProfiles] = React.useState<UserProfileProps[]>([]);
  const [activeTab, setActiveTab] = useState<string>('1');

  const handleMenuClick = (e: any) => {
    setActiveTab(e.key);
  };

  // Fetch user profiles from the backend API (or use the test data)
  React.useEffect(() => {
    // Simulate fetching data from the backend API
    setUserProfiles(testUserProfiles);
  }, []);

  return (
    <div>
    <NavigationHeader />
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})`, padding: 0,marginLeft:0,marginRight:0}}>
      <header className="app-header">
        <Search placeholder="Search students or professors.  " onSearch={onSearch} enterButton style={{ width: 400 }} />
      </header>
      <Layout className="layout">
    <Header >
      <div className="logo" />
      <Menu
  theme="dark"
  mode="horizontal"
  defaultSelectedKeys={['2']}
  onClick={handleMenuClick}
  items={[
    { key: '1', label: 'About' }, // Change the label here
    { key: '2', label: 'Projects/Papers' }, // Change the label here
    { key: '3', label: 'Achievements' }, // Change the label here
  ]}
/>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>About</Breadcrumb.Item>
        <Breadcrumb.Item>Projects/Papers</Breadcrumb.Item>
        <Breadcrumb.Item>Achievements</Breadcrumb.Item>
      </Breadcrumb>
      <main className="site-layout-content">
          {activeTab === '1' && (
            userProfiles.map((profile, index) => (
              <UserProfiles
                key={index}
                userName={profile.userName}
                title={profile.title}
                email={profile.email}
                phone={profile.phone}
                linkedin={profile.linkedin}
              />
            ))
          )}
          {activeTab === '2' && (
            <div>
              Content for Tab 2
            </div>
          )}
          {activeTab === '3' && (
            <div>
              Content for Tab 3
            </div>
          )}
        </main>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    <button className="download-btn"><FaDownload />  Download Resume</button>
    </Footer>
  </Layout>
    </div>
    </div>
  );
};

export default UserProfile;