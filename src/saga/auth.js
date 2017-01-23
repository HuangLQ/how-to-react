import { isCancelError } from 'redux-saga'
import { fork, take, call, put, cancel } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import store from 'store2'
import service from '../service'
import { fetch as fetchActionCreators } from '../actions'

function* authorize(getState) {
  const state = getState()
  const { loginSuccess, loginFailure } = fetchActionCreators
  const { username, password } = state.getIn(['form', 'login', 'values']).toJS()
  try {
    const { res, error } = yield call(service.auth, username, password)
    if (res) {
      store('accessToken', res.accessToken)
      yield put(loginSuccess(res))

      const nextPathname = state.getIn(['routing', 'locationBeforeTransitions', 'state', 'nextPathname'])
      if (nextPathname) {
        yield put(replace(nextPathname))
      } else {
        yield put(replace('/'))
      }
    } else {
      yield put(loginFailure(error))
    }
  } catch (error) {
    if (isCancelError(error)) {
      yield put(loginFailure(error))
    }
  }
}

function* loginFlow(getState) {
  const { loginRequest, loginFaliure, logoutRequest } = fetchActionCreators
  while (yield take(loginRequest().type)) {
    const task = yield fork(authorize, getState)
    const action = yield take([logoutRequest().type, loginFaliure().type])
    if (action.type === logoutRequest().type) {
      yield cancel(task)
    }
    store.remove('accessToken')
  }
}

export default function* auth(getState) {
  yield fork(loginFlow, getState)
}
