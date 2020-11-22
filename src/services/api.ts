import axios from 'axios';

const api = axios.create({
    baseURL: 'https://01c223901be6.ngrok.io'
});

export default api;