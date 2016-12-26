import { Map } from 'immutable'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

const routerM = routerMiddleware(browserHistory)

const initialState = Map({})

export default function configureStore(state = initialState) {
  return createStore(rootReducer, state, applyMiddleware(routerM))
}
