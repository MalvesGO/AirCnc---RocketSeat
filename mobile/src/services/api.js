import axios from 'axios';

const api = axios.create({
    baseURL: 'http://169.254.177.183:3333',
})

export default api;