import React, { useState } from 'react';

export default function TradeForm() {
  const [orderType, setOrderType] = useState('limit');
  const [side, setSide] = useState('buy');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSide('buy')}
          className={`flex-1 py-2 rounded font-semibold ${
            side === 'buy'
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSide('sell')}
          className={`flex-1 py-2 rounded font-semibold ${
            side === 'sell'
              ? 'bg-red-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setOrderType('limit')}
          className={`px-4 py-1 rounded text-sm ${
            orderType === 'limit'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Limit
        </button>
        <button
          onClick={() => setOrderType('market')}
          className={`px-4 py-1 rounded text-sm ${
            orderType === 'market'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Market
        </button>
      </div>

      <div className="space-y-4">
        {orderType === 'limit' && (
          <div>
            <label className="block text-sm text-gray-600 mb-1">Price</label>
            <div className="relative">
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="0.00"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                USDT
              </span>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm text-gray-600 mb-1">Amount</label>
          <div className="relative">
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="0.00"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              BTC
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[25, 50, 75, 100].map((percent) => (
            <button
              key={percent}
              className="py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
            >
              {percent}%
            </button>
          ))}
        </div>

        <button
          className={`w-full py-3 rounded-lg font-semibold ${
            side === 'buy'
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
        >
          {side === 'buy' ? 'Buy' : 'Sell'} BTC
        </button>
      </div>
    </div>
  );
}