import React from 'react'
import { Route, IndexRoute } from 'react-router'
import store from 'store2'

import App from './containers/App'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

const isAuth = () => (
  !!store('accessToken')
)

const requireAuth = (nextState, replace) => {
  if (isAuth()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

const routes = [
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} onEnter={requireAuth} />
    <Route path="login" component={Login} />
  </Route>,
]

export default routes
