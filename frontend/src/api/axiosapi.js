import axios from 'axios'
export const axiosapi = axios.create({
    baseURL: 'http://localhost:3001'
})
