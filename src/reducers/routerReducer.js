import { Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { LOCATION_CHANGE } from 'react-router-redux'


const initialState = Map({
  locationBeforeTransitions: null,
})

/**
 * Reducer domain that handles LOCATION_CHANGE.
 **/
export default createReducer(initialState, {
  [LOCATION_CHANGE]: (state, action) => state.merge({
    locationBeforeTransitions: action.payload,
  }),
})
