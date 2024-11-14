import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

export default function TradingView() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">BTC/USDT</h2>
          <span className="text-3xl font-semibold text-green-500">$44,123.45</span>
          <span className="text-sm text-green-500 flex items-center">
            <ArrowUp className="h-4 w-4 mr-1" />
            2.34%
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">1H</button>
          <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">4H</button>
          <button className="px-4 py-2 text-sm bg-gray-800 text-white rounded">1D</button>
          <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">1W</button>
        </div>
      </div>
      <div className="h-[400px] bg-gray-50 rounded flex items-center justify-center">
        <p className="text-gray-500">Trading chart will be integrated here</p>
      </div>
    </div>
  );
}