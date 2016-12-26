import axios from 'axios'
import { SysError, MsgError } from './error'
import {API_ROOT} from '../constants/API'

const instance = axios.create({
  baseURL: API_ROOT,
})

instance.interceptors.response.use((response) => {
  if (response.data && response.data.code !== 0) {
    return Promise.reject(new MsgError(response.data.msg))
  }

  return response
}, (error) => {
  switch (error.status) {
    case 401:
      break
    case 404:
      break
    case 500:
      break
    default:

  }

  return Promise.reject(new SysError())
})

export default instance
