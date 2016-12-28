import { createActions } from 'redux-actions'
import API from '../constants/actionTypes'

const {
  // login
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // logout
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} = API


export const {
  // login
  loginRequest,
  loginSuccess,
  loginFaliure,
  // logout
  logoutRequest,
  logoutSuccess,
  logoutFaliure,
} = createActions(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
)
