import axios from 'axios';

export const client = axios.create({
    baseURL: "https://api.covid19api.com/",
    timeout: 5000,
});