import axios from 'axios';

const api = axios.create({
    baseURL: 'https://45a90c531046.ngrok.io'
});

export default api;