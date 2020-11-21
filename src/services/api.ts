import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6d8d92095595.ngrok.io'
});

export default api;