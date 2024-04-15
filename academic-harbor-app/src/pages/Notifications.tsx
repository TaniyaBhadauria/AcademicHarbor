import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background.png';
import Header from './Component/Header';
import { Pagination } from 'antd';
import './styles/Notification.css';
import { Avatar, List, Divider, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';


interface Notification {
  id: string;
  message: string;
  sentDate: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(2); // Adjust this based on your preference
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch notifications from an API or a mock data source
    fetchNotifications();
  }, [currentPage]);

const fetchNotifications = async () => {
  try {
    const response = await fetch('http://localhost:8082/hello-world/notification?name=101');
    if (!response.ok) {
      throw new Error('Failed to fetch notifications');
    }
    const data = await response.json();
    // Calculate total pages based on total notifications and page size
    const totalPages = Math.ceil(data.length / pageSize);
    setTotalPages(totalPages);

    // Calculate the starting index of the current page
    const startIndex = (currentPage - 1) * pageSize;
    // Slice the notifications array to get notifications for the current page
    const currentPageNotifications = data.slice(startIndex, startIndex + pageSize);
    setNotifications(currentPageNotifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    // Handle error state if needed
  }
};

  const renderNotifications = () => {
      return (
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          style={{ width: '100%' }}
          renderItem={(notification, index) => (
            <List.Item key={notification.id}>
              <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                title={<span style={{ marginRight: '10px' }}>Date: {notification.sentDate}</span>}
                description={notification.message}
              />
            </List.Item>
          )}
        />
      );
    };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

   return (
       <div className="notification-page-container">
         <Header />
         <div className="background" style={{ backgroundImage: `url(${backgroundImage})`, padding: 100 }}>
           <main className="notification-content">
             <div className="notification-container">
               <div className="notifications-header">
                 <h3>Notifications</h3>
                 <Avatar.Group maxCount={2} maxPopoverTrigger="click" size="large" maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}>
                   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                   <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                   <Tooltip title="Ant User" placement="top">
                     <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                   </Tooltip>
                   <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                 </Avatar.Group>
               </div>
               <Divider />
               {renderNotifications()}
               <Pagination current={currentPage} total={totalPages + 1} pageSize={pageSize} onChange={handlePageChange} style={{ textAlign: 'center' }} />
             </div>
           </main>
         </div>
         <footer className="footer" style={{ textAlign: 'center' }}>
           <p>&copy; 2024 AcademicHarbor. All rights reserved.</p>
         </footer>
       </div>
     );
   };

export default Notifications;
