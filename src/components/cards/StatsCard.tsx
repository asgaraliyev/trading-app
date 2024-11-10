import React from 'react';
import { Card } from 'antd-mobile';

interface StatsCardProps {
  label: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <h4 className="font-medium text-gray-400">{label}</h4>
      <p className="text-lg font-semibold">{value}</p>
    </Card>
  );
};

export default StatsCard;