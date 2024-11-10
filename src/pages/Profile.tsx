import React from 'react';
import { List, Avatar, Button } from 'antd-mobile';
import { Settings, Wallet, LogOut, ChevronRight } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="text-center py-8">
        <Avatar
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-xl font-bold">John Doe</h2>
        <p className="text-gray-400">ID: 0x1234...5678</p>
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <List>
          <List.Item
            prefix={<Wallet className="w-5 h-5 text-indigo-500" />}
            extra="$47,892.34"
          >
            Balance
          </List.Item>
        </List>
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <List>
          <List.Item
            prefix={<Settings className="w-5 h-5" />}
            arrow={<ChevronRight className="w-5 h-5" />}
            onClick={() => {}}
          >
            Account Settings
          </List.Item>
          <List.Item
            prefix={<Wallet className="w-5 h-5" />}
            arrow={<ChevronRight className="w-5 h-5" />}
            onClick={() => {}}
          >
            Deposit
          </List.Item>
          <List.Item
            prefix={<Wallet className="w-5 h-5" />}
            arrow={<ChevronRight className="w-5 h-5" />}
            onClick={() => {}}
          >
            Withdraw
          </List.Item>
        </List>
      </div>

      <Button
        block
        color="danger"
        className="mt-8"
        onClick={() => {}}
      >
        <div className="flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </div>
      </Button>
    </div>
  );
};

export default Profile;