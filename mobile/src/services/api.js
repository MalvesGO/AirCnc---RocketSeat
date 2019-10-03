import axios from 'axios';

const api = axios.create({
    baseURL: 'http://169.254.202.198:3333',
})

export default api;