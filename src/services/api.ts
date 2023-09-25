import axios from 'axios'

export const api = axios.create({
    baseURL: "https://parkeasybd.onrender.com/register",
    headers: {
        'Accept' : 'application/json',
    },
})