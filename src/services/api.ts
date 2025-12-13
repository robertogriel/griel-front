import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { CookiesEnum } from '../database/Cookies'

const LOGIN_PATH = '/dashboard/login'

export const api = axios.create({
  baseURL: process.env.BACKEND_API,
  headers: {
    Accept: 'application/json',
  },
})

const normalizePath = (url?: string): string => {
  if (!url) return ''
  try {
    return new URL(url).pathname
  } catch {
    return url.split('?')[0]
  }
}

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const path = normalizePath(config.url)

    if (path !== LOGIN_PATH) {
      const token = Cookies.get(CookiesEnum.AUTH_TOKEN)
      if (token && config.headers && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`
      }
    } else if (config.headers) {
      delete config.headers.Authorization
    }

    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const path = normalizePath(error.config?.url)

      if (path !== LOGIN_PATH) {
        Cookies.remove(CookiesEnum.AUTH_TOKEN)

        if (typeof window !== 'undefined' && window.location.pathname !== LOGIN_PATH) {
          window.location.href = LOGIN_PATH
        }
      }
    }

    return Promise.reject(error)
  }
)
