import { Map } from 'immutable'
import { MsgError, SysError } from '../utils'

const initialState = Map({})

export default function errorMessage(state = initialState, action) {
  const { type, error, payload } = action
  const [API, status] = type.split('_')

  if (status === 'SUCCESS') {
    return state.delete(API)
  }

  if (error && payload.name === 'MsgError') {
    return state.merge({ [API]: payload.message })
  }

  return state
}
