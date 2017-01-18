import React from 'react'
import { Route, Redirect } from 'react-router'

import App from './containers/App'
import Login from './containers/Login'
// import Dashboard from './containers/Dashboard'

const isAuth = () => (
  !!localStorage.token
)

const requireAuth = (nextState, replace) => {
  if (!isAuth()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

const routes = [
  <Redirect from="/" to="/dashboard" />,
  <Route path="/" component={App}>
    <Route path="login" component={Login} />
    <Route path="dashboard" component={Login} onEnter={requireAuth} />
  </Route>,
]

export default routes
