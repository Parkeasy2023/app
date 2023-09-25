import axios from 'axios'

export const api = axios.create({
    baseURL: "https://parkeasybd.onrender.com",
    headers: {
        'Accept' : 'application/json',
    },
})