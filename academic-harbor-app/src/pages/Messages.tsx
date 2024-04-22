import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png'
import NavigationHeader from './Component/Header'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import './styles/Messages.css'
import {
  DesktopOutlined,
  FileOutlined,
  MenuOutlined,
  TeamOutlined,
  UserOutlined,MessageOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const dummyApiResponse = [
  { id: 1, user: 'John Green', message: 'Hello, how are you?' },
  { id: 2, user: 'Alice Wonka', message: 'Hello...' },
  { id: 3, user: 'Bob Siri', message: 'Hey there!' },
];
const dummySentResponse = [
  { id: 4, user: 'John Green', message: 'Are you available?' },
  { id: 5, user: 'Alice Wonka', message: 'Applied for internship' },
  { id: 6, user: 'Bob Siri', message: 'Can we connect?' },
];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Messages', 'Messages', <MenuOutlined />),
  getItem('Inbox', 'Inbox', <MessageOutlined />, [
    ...dummyApiResponse.map((item) =>
      getItem(item.user, item.id.toString(), <UserOutlined />)
    ),
  ]),
  getItem('Outbox', 'Outbox', <MessageOutlined />, [
    ...dummySentResponse.map((item) =>
      getItem(item.user, item.id.toString(), <UserOutlined />)
    ),
  ]),
];

const Messages: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedSentUser, setSelectedSentUser] = useState<string | null>(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuItemClick = (e: any) => {
    if (e.keyPath[1] === 'Inbox') {
          setSelectedUser(e.key);
          setSelectedSentUser(null);
        } else if (e.keyPath[1] === 'Outbox') {
          setSelectedSentUser(e.key);
          setSelectedUser(null);
        }
  };

  var filteredMessages = selectedUser
    ? dummyApiResponse.filter((item) => item.id.toString() === selectedUser)
    : [];

   var filteredSentMessages = selectedSentUser
       ? dummySentResponse.filter((item) => item.id.toString() === selectedSentUser)
       : [];

  return (
    <div className="container">
      <NavigationHeader />
      <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`,marginLeft:0,marginRight:0, marginBottom:0}}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuItemClick} />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Messages</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: '#fdb203',
                  borderRadius: borderRadiusLG,
                }}
                className='message-content'
              >
                {filteredMessages.map((item) => (
                  <div key={item.id}>
                    <h3>{item.user}</h3>
                    <p>{item.message}</p>
                  </div>
                ))}
                {filteredSentMessages.map((item) => (
                   <div key={item.id}>
                     <h3>{item.user}</h3>
                     <p>{item.message}</p>
                  </div>
                ))}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Messages;
