import axios from 'axios'
import authService from './auth'
import userService from './users'
import feedbackService from './feedbacks'
import router from '@/router'
import { setGlobalLoading } from '@/store/global'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000',
}

const httpClient = axios.create({
  baseURL: API_ENVS.local, // TODO: criar logica para acessar a api conforme ambiente
})

httpClient.interceptors.request.use((config) => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

httpClient.interceptors.response.use(
  (response) => {
    setGlobalLoading(false)

    return response
  },
  (error) => {
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500
    if (canThrowAnError) {
      setGlobalLoading(false)
      throw new Error(error.message)
    }

    if (error.response.status === 401) {
      router.push({ name: 'Home' })
    }

    setGlobalLoading(false)
    return error
  },
)

export default {
  auth: authService(httpClient),
  user: userService(httpClient),
  feedbacks: feedbackService(httpClient),
}
