import { Map } from 'immutable'

const initialState = Map({})

export default function pages(state = initialState, action) {
  const { type, payload } = action
  const [API, status] = type.split('_')

  if (status === 'SUCCESS' && payload && payload.response && payload.response.page) {
    return state.merge({ [API]: page })
  }

  return state
}
