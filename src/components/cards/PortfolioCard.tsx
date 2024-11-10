import React from 'react';
import { Card } from 'antd-mobile';

interface PortfolioCardProps {
  value: string;
  change: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ value, change }) => {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Portfolio Value</h2>
          <p className="text-3xl font-bold text-indigo-500">{value}</p>
        </div>
        <span className="text-green-500">{change}</span>
      </div>
    </Card>
  );
};

export default PortfolioCard;