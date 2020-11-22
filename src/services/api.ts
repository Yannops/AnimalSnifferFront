import axios from 'axios';

const api = axios.create({
    baseURL: 'http://animalsniffer.azurewebsites.net'
});

export default api;