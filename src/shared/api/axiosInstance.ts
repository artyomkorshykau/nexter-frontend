import axios from 'axios'


export const instance = axios.create( {
  baseURL: 'https://nexter-backend.vercel.app/api',
  withCredentials: true,
  timeout: 5000
} )