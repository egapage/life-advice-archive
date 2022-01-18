import axios from 'axios';

const api  = process.env.REACT_APP_STAGE === "dev" ? axios.create({
    baseURL: "http://localhost:9090"
}) : axios.create({
    baseURL: "//lifeadvice.convectiv.io"
});

api.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;

const hostname = process.env.REACT_APP_STAGE === "dev" ? "http://localhost:9090" : "http://lifeadvice.convectiv.io";

export { api, hostname };