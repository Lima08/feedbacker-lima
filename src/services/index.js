import axios from 'axios'
import authService from './auth'
import userService from './users'
import router from '@/router'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000',
}

const httpClient = axios.create({
  baseURL: API_ENVS.local, // TODO: criar logica para acessar a api conforme ambiente
})

httpClient.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500
    if (canThrowAnError) {
      throw new Error(error.message)
    }

    if (error.response.status === 401) {
      router.push({ name: 'Home' })
    }

    return error
  },
)

export default {
  auth: authService(httpClient),
  user: userService(httpClient),
}
