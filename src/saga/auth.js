import { takeEvery, takeLatest } from 'redux-saga'
import { fork, take, call, put, cancel } from 'redux-saga/effects'
import { isCancelError } from 'redux-saga'
import { push, replace } from 'react-router-redux'
import { auth } from '../services'
import { API } from '../actions'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../constants/ActionTypes'

function* authorize(getState) {
  const state = getState()
  const { username, password } = state.getIn(['form', 'login', 'values']).toJS()
  const { res, error } = yield call(auth, username, password)
  if (res) {
    localStorage.token = res.token
    yield put(API.loginSuccess(res))

    const nextPathname = state.getIn(['routing', 'locationBeforeTransitions', 'state', 'nextPathname'])
    if(nextPathname) {
      yield put(replace(nextPathname))
    } else {
      yield put(replace('/'))
    }
  } else {
    yield put(API.loginFailure(error))
  }
}

function* loginFlow(getState) {
  while (true) {
    yield take(LOGIN_REQUEST)
    const task = yield fork(authorize, getState)
    const action = yield take([LOGOUT_REQUEST, LOGIN_FAILURE])
    if(action.type === 'LOGOUT_REQUEST')  {
      yield cancel(task)
    }
  }
}

export default function* root(getState) {
  yield fork(loginFlow, getState)
}
