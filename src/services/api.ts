import axios from 'axios';

/* Rota Publica do backend com o banco
http://animalsniffer.azurewebsites.net*/

/*para testes usar com o NGROK: ngrok http https://localhost:44350 -host-header="localhost:44350*/

const api = axios.create({
    baseURL: 'http://492e76b7a486.ngrok.io'
});

export default api;