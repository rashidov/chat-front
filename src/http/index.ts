import axios from "axios"

export const API_URL = 'http://127.0.0.1:5000/api'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

export default $api