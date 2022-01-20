import axios from 'axios';

const api  = axios.create({
    baseURL: "https://lifeadvice.convectiv.io"
});

api.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`

export { api }