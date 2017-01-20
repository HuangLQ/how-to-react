import axios from 'axios'
import store from 'store2'
import { SysError, MsgError } from './error'

const ACCEPT_LANGUAGE = {
  zh: 'zh-CN,zh',
  en: 'en-US,en',
}

const instance = axios.create({
  proxy: {
    host: '127.0.0.1',
    port: 9000,
  },
})

// Add a request interceptor
instance.interceptors.request.use((config) => {
  const reqConfig = Object.assign({}, config)
  const accessToken = store('accessToken') || null
  const language = store('language') || 'zh'
  reqConfig.headers.Authorization = `token ${accessToken}`
  reqConfig.headers['Accept-Language'] = ACCEPT_LANGUAGE[language]

  return reqConfig
}, error => Promise.reject(error))

instance.interceptors.response.use(response => response, (error) => {
  switch (error.status) {
    case 401:
      break
    case 404:
      break
    case 422:
      return Promise.reject(new MsgError(error))
    case 500:
      break
    default:

  }

  return Promise.reject(new SysError())
})

export default instance
