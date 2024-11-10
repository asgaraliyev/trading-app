import React from 'react';
import { TabBar } from 'antd-mobile';
import { LucideIcon } from 'lucide-react';

interface TabBarItemProps {
  key: string;
  title: string;
  icon: LucideIcon;
}

const TabBarItem: React.FC<TabBarItemProps> = ({ key, title, icon: Icon }) => (
  <TabBar.Item
    key={key}
    title={title}
    icon={<Icon className="w-5 h-5" />}
  />
);

export default TabBarItem;