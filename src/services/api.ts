import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5ab7256a8616.ngrok.io'
});

export default api;