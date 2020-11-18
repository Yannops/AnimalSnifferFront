import axios from 'axios';

const api = axios.create({
    baseURL: 'https://793fa6ce2be7.ngrok.io',
});

export default api;