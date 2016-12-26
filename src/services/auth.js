import { axios } from '../utils'
import {
  LOGIN,
  LOGOUT,
} from '../constants/API'

export async function auth(username, password) {
  return await axios.get(LOGIN).then((response) => {
    return { res: response.data }
  }).catch((error) => {
    return { error }
  })
}
