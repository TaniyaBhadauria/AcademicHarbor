import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png';
import NavigationHeader from './Component/Header';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import './styles/Messages.css';
import {
  DesktopOutlined,
  FileOutlined,
  MenuOutlined,
  TeamOutlined,
  UserOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

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

const Messages: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedSentUser, setSelectedSentUser] = useState<string | null>(null);
  const [dummyApiResponse, setDummyApiResponse] = useState<any[]>([]);
  const [dummySentResponse, setDummySentResponse] = useState<any[]>([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    fetchMessages();
    fetchSentMessages();
  }, []);

  const items: MenuItem[] = [
    getItem('Messages', 'Messages', <MenuOutlined />),
    getItem('Inbox', 'Inbox', <MessageOutlined />, [
      ...dummyApiResponse.map((item: any) =>
        getItem(item.user, item.id.toString(), <UserOutlined />)
      ),
    ]),
    getItem('Outbox', 'Outbox', <MessageOutlined />, [
      ...dummySentResponse.map((item: any) =>
        getItem(item.user, item.id.toString(), <UserOutlined />)
      ),
    ]),
  ];

  const fetchMessages = async () => {
    try {
      const recipientId = 'Taniya Bhadauria';
      const response = await fetch(
        `http://localhost:8082/hello-world/messages-inbox?recipientId=${encodeURIComponent(
          recipientId
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        const formattedData = data.map((message: any) => ({
          id: message.messageId,
          user: message.senderId,
          message: message.body,
          subject: message.subject,
          timeStamp: message.timeStamp,
          attachmentId: message.attachmentId,
        }));
        setDummyApiResponse(formattedData);
      } else {
        console.error('Failed to fetch messages:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const fetchSentMessages = async () => {
    try {
      const recipientId = 'Taniya Bhadauria';
      const response = await fetch(
        `http://localhost:8082/hello-world/messages-outbox?senderId=${encodeURIComponent(
          recipientId
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        const formattedData = data.map((message: any) => ({
          id: message.messageId,
          user: message.recipientId,
          subject: message.subject,
          message: message.body,
          timeStamp: message.timeStamp,
          attachmentId: message.attachmentId,
        }));
        setDummySentResponse(formattedData);
      } else {
        console.error('Failed to fetch messages:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleMenuItemClick = (e: any) => {
    if (e.keyPath[1] === 'Inbox') {
      setSelectedUser(e.key);
      setSelectedSentUser(null);
    } else if (e.keyPath[1] === 'Outbox') {
      setSelectedSentUser(e.key);
      setSelectedUser(null);
    }
  };

  const selectedMessage = dummyApiResponse.find(
    (item) => item.id.toString() === selectedUser
  );

  const selectedSentMessage = dummySentResponse.find(
    (item) => item.id.toString() === selectedSentUser
  );

  return (
    <div className="container">
      <NavigationHeader />
      <div
        className="login-container"
        style={{ backgroundImage: `url(${backgroundImage})`, padding: 100, marginLeft: 0, marginRight: 0 }}
      >
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
                {selectedUser && (
                  <div>
                    <h3>From: {selectedMessage?.user}</h3>
                    <p>Subject: {selectedMessage?.subject}</p>
                    <p>Date: {selectedMessage?.timeStamp}</p>
                    <p>Message: {selectedMessage?.message}</p>
                  </div>
                )}
                {selectedSentUser && (
                  <div>
                    <h3>To: {selectedSentMessage?.user}</h3>
                    <p>Subject: {selectedSentMessage?.subject}</p>
                    <p>Date: {selectedSentMessage?.timeStamp}</p>
                    <p>Message: {selectedSentMessage?.message}</p>
                  </div>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Messages;
