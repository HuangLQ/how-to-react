import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form/immutable'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import { TextField } from 'redux-form-material-ui'
import { cyan500, grey600, red500 } from 'material-ui/styles/colors'
import { API as APIActions } from '../actions'
import { connect } from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { mapActions } from '../utils'

const logo = require('../img/login-logo.png')

const styles = {
  root: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: cyan500,
    width: '100%',
    height: '100%',
  },
  paper: {
    display: 'inline-block',
    width: 300,
    margin: '20px auto',
    padding: 20,
  },
  submitButton: {
    marginTop: 32,
  },
  logoDesc: {
    marginBottom: 0,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    lineHeight: '18px',
    color: grey600,
  },
  error: {
    color: red500,
    margin: '10px 0',
    fontSize: '12px',
  }
}

const validate = values => {
  const errors = {}

  if (!values.get('username')) {
    errors.username = '用户名不能为空'
  } else if (values.get('username').length > 15) {
    errors.username = '用户名不能超过15个字符'
  }

  if (!values.get('password')) {
    errors.password = '密码不能为空'
  } else if (values.get('password').length < 6) {
    errors.password = '密码不能少于6个字符'
  }

  return errors
}

class Login extends Component {
  constructor(props, context) {
    super(props, context)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    this.props.actions.loginRequest()
  }

  render() {
    const {
      submitting,
      invalid,
      handleSubmit,
      error,
    } = this.props

    return (
      <div style={styles.root}>
        <Paper style={styles.paper} zDepth={4}>
          <div>
            <Avatar src={logo} size={100} />
            <p style={styles.logoDesc}>
              Material Design Admin Template
            </p>
          </div>
          <form onSubmit={handleSubmit(this.onSubmit) }>
            <Field
              name="username"
              component={TextField}
              hintText="用户名"
              floatingLabelText="用户名"
              />
            <Field
              name="password"
              component={TextField}
              hintText="密码"
              floatingLabelText="密码"
              type="password"
              />
            <RaisedButton
              style={styles.submitButton}
              type="submit"
              label="登录"
              disabled={invalid || submitting}
              fullWidth
              secondary
              />
            <div style={styles.error}>{error}</div>
          </form>
        </Paper>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  validate,
})(connect((state) => {
  const msg = state.getIn(['errorMessage', 'LOGIN'])
  return { error: msg }
}, mapActions(APIActions))(immutableRenderDecorator(Login)))
