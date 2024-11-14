import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CryptoHiveX</h3>
            <p className="text-sm">The most trusted cryptocurrency trading platform.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Spot Trading</a></li>
              <li><a href="#" className="hover:text-white">Margin Trading</a></li>
              <li><a href="#" className="hover:text-white">Futures</a></li>
              <li><a href="#" className="hover:text-white">Staking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Trading Rules</a></li>
              <li><a href="#" className="hover:text-white">Fees</a></li>
              <li><a href="#" className="hover:text-white">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-white">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-white">AML Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} CryptoHiveX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}