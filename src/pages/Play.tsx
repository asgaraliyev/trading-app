import React from 'react';
import { Card, Button } from 'antd-mobile';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Play = () => {
  return (
    <div className="p-4 space-y-4">
      <Card className="bg-gray-900 border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">BTC/USD</h2>
            <p className="text-3xl font-bold text-indigo-500">$47,892.34</p>
          </div>
          <span className="text-green-500">+2.4%</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button 
            block 
            color="success"
            className="h-16"
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Long</span>
            </div>
          </Button>
          
          <Button 
            block 
            color="danger"
            className="h-16"
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingDown className="w-5 h-5" />
              <span>Short</span>
            </div>
          </Button>
        </div>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Active Positions</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
            <div>
              <p className="text-sm text-gray-400">Long BTC/USD</p>
              <p className="font-semibold">0.5 BTC</p>
            </div>
            <div className="text-right">
              <p className="text-green-500">+$420.69</p>
              <p className="text-sm text-gray-400">Entry: $46,800</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-medium text-gray-400">Available Balance</h4>
            <p className="text-lg font-semibold">$10,000.00</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-400">PnL Today</h4>
            <p className="text-lg font-semibold text-green-500">+$520.42</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Play;