import React from 'react';
import { Card } from 'antd-mobile';
import PortfolioCard from '../components/cards/PortfolioCard';
import StatsCard from '../components/cards/StatsCard';
import CryptoChart from '../components/charts/CryptoChart';

const mockData = [
  {
    id: 'BTC',
    data: [
      { x: '00:00', y: 45000 },
      { x: '04:00', y: 45200 },
      { x: '08:00', y: 46000 },
      { x: '12:00', y: 45800 },
      { x: '16:00', y: 46500 },
      { x: '20:00', y: 47000 },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <PortfolioCard value="$47,892.34" change="+2.4%" />

      <Card className="bg-gray-900 border-gray-800">
        <h3 className="text-lg font-semibold mb-4">BTC/USD</h3>
        <CryptoChart data={mockData} />
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <StatsCard label="24h Volume" value="$2.1B" />
        <StatsCard label="Market Cap" value="$892.4B" />
      </div>
    </div>
  );
};

export default Home;