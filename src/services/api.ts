import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fef29e0ea262.ngrok.io'
});

export default api;