import React from 'react';

const asks = [
  { price: 44125.30, amount: 0.2341, total: 10329.93 },
  { price: 44124.80, amount: 0.1232, total: 5436.17 },
  { price: 44124.20, amount: 0.5631, total: 24847.84 },
  { price: 44123.90, amount: 0.3421, total: 15094.78 },
  { price: 44123.50, amount: 0.8923, total: 39371.98 },
];

const bids = [
  { price: 44122.90, amount: 0.4523, total: 19958.89 },
  { price: 44122.40, amount: 0.2341, total: 10329.35 },
  { price: 44121.80, amount: 0.6742, total: 29747.52 },
  { price: 44121.30, amount: 0.3421, total: 15094.30 },
  { price: 44120.90, amount: 0.9823, total: 43337.25 },
];

export default function OrderBook() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Order Book</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">0.1</button>
          <button className="px-3 py-1 text-xs bg-gray-800 text-white rounded">0.01</button>
          <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">0.001</button>
        </div>
      </div>
      
      <div className="text-sm">
        <div className="grid grid-cols-3 text-gray-500 pb-2">
          <div>Price(USDT)</div>
          <div className="text-right">Amount(BTC)</div>
          <div className="text-right">Total</div>
        </div>
        
        <div className="space-y-1">
          {asks.map((ask, i) => (
            <div key={i} className="grid grid-cols-3 text-red-500 hover:bg-red-50">
              <div>{ask.price.toFixed(2)}</div>
              <div className="text-right">{ask.amount.toFixed(4)}</div>
              <div className="text-right">{ask.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
        
        <div className="text-2xl font-semibold text-center py-2 text-gray-800">
          44,123.45
        </div>
        
        <div className="space-y-1">
          {bids.map((bid, i) => (
            <div key={i} className="grid grid-cols-3 text-green-500 hover:bg-green-50">
              <div>{bid.price.toFixed(2)}</div>
              <div className="text-right">{bid.amount.toFixed(4)}</div>
              <div className="text-right">{bid.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}