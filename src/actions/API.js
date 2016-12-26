import { createActions } from 'redux-actions'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../constants/ActionTypes'

// auth
export const {
  loginRequest,
  loginSuccess,
  loginFaliure,
} = createActions(LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE)

export const {
  logoutRequest,
  logoutSuccess,
  logoutFaliure,
} = createActions(LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE)
