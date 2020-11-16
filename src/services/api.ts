import axios from 'axios';

const api = axios.create({
    baseURL: 'https://d0d740e52100.ngrok.io',
});

export default api;