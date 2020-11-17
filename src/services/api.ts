import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5decf01c132f.ngrok.io',
});

export default api;