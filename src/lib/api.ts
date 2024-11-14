import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface Trade {
  id: string;
  pair: string;
  type: string;
  amount: number;
  price: number;
  status: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
  kyc_status: string;
}

export const api = {
  trades: {
    getAll: async (): Promise<Trade[]> => {
      const response = await axios.get(`${API_URL}/trades`);
      return response.data;
    },
    create: async (trade: Omit<Trade, 'created_at' | 'status'>): Promise<Trade> => {
      const response = await axios.post(`${API_URL}/trades`, trade);
      return response.data;
    }
  },
  users: {
    getAll: async (): Promise<User[]> => {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    }
  }
};