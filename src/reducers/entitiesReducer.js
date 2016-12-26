import { Map } from 'immutable'

const initialState = Map({})

export default function entities(state = initialState, action) {
  const { payload } = action

  if (payload && payload.response && payload.response.entities) {
    return state.mergeDeep(action.response.entities)
  }

  return state
}
