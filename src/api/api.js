import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as necessary
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
