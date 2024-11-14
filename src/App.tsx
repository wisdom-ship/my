import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TradingView from './components/TradingView';
import OrderBook from './components/OrderBook';
import TradeForm from './components/TradeForm';
import TawkToChat from './components/TawkToChat';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function Trading() {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TradingView />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Recent Trades</h3>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-green-500">44,123.45</span>
                    <span>0.2341 BTC</span>
                    <span className="text-gray-500">12:45:30</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Open Orders</h3>
              <div className="text-sm text-gray-500 text-center">
                No open orders
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <TradeForm />
          <OrderBook />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Trading />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
        <TawkToChat />
      </div>
    </Router>
  );
}

export default App;