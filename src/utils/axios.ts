import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  validateStatus: () => true,
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  return config
})

export default instance
