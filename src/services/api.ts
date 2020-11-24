import axios from 'axios';

const api = axios.create({
    baseURL: 'http://d5671c56c38d.ngrok.io'
});

export default api;