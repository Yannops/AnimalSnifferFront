import axios from 'axios';

/* Rota Publica do backend com o banco
http://animalsniffer.azurewebsites.net*/

/*para testes usar com o NGROK: ngrok http https://localhost:44350 -host-header="localhost:44350"*/

const api = axios.create({
    baseURL: 'https://ea1feed9c23a.ngrok.io'
});

export default api;