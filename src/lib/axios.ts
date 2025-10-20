import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.API_JSON || 'http://localhost:5000'
})