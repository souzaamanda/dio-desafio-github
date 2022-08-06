import axios from 'axios';

// criando as instancias do axios para poder fazer as requisições http

const api = axios.create({
    baseURL:"https://api.github.com/",
});

export default api;