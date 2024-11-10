import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { TabBar, NavBar } from 'antd-mobile';
import { Home as HomeIcon, PlayCircle, User } from 'lucide-react';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const tabs = [
    {
      key: '/',
      title: 'Home',
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      key: '/play',
      title: 'Play',
      icon: <PlayCircle className="w-5 h-5" />,
    },
    {
      key: '/profile',
      title: 'Profile',
      icon: <User className="w-5 h-5" />,
    },
  ];

  const getPageTitle = () => {
    const tab = tabs.find(tab => tab.key === location.pathname);
    return tab?.title || 'Crypto Trading';
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar className="bg-gray-900 border-b border-gray-800">
        {getPageTitle()}
      </NavBar>
      
      <main className="flex-1 overflow-auto pb-16">
        <Outlet />
      </main>

      <TabBar
        className="tabbar fixed bottom-0 w-full"
        activeKey={location.pathname}
        onChange={value => navigate(value)}
      >
        {tabs.map(item => (
          <TabBar.Item 
            key={item.key} 
            icon={item.icon} 
            title={item.title} 
          />
        ))}
      </TabBar>
    </div>
  );
};

export default Layout;