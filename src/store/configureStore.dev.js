// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { Map } from 'immutable'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import immutableStateInvariant from 'redux-immutable-state-invariant'
import createSagaMiddleware from 'redux-saga'
// import saga from '../saga'
import rootReducer from '../reducers'

const routerM = routerMiddleware(browserHistory)
const sagaM = createSagaMiddleware()

const $$initialState = Map({})

export default function configureStore(state = $$initialState) {
  const store = createStore(rootReducer, state, compose(
    applyMiddleware(immutableStateInvariant(), routerM, sagaM),
    // add support for Redux dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ))

  // sagaM.run(saga, store.getState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default // eslint-disable-line global-require

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
