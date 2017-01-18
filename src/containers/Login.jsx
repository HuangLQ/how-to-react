import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Paper, RaisedButton, Avatar } from 'material-ui'
import { reduxForm, Field } from 'redux-form/immutable'
import { TextField } from 'redux-form-material-ui'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { API as APIActionCreators } from '../actions'
import { withStyles, css } from '../withStyles'

const logo = require('../img/login-logo.png')

const validate = (values) => {
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

const propTypes = {
  actionsCreators: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
}

@withStyles(({ colors }) => ({
  root: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: colors.cyan500,
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
    color: colors.grey600,
  },
  error: {
    color: colors.red500,
    margin: '10px 0',
    fontSize: '12px',
  },
}))
@immutableRenderDecorator
class Login extends Component {
  constructor(props, context) {
    super(props, context)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    const { actionsCreators } = this.props
    actionsCreators.loginRequest()
  }

  render() {
    const {
      submitting,
      invalid,
      handleSubmit,
      error,
      styles,
    } = this.props

    return (
      <div {...css(styles.root)}>
        <Paper {...css(styles.paper)} zDepth={4}>
          <div>
            <Avatar src={logo} size={100} />
            <p {...css(styles.logoDesc)}>
              Material Design Admin Template
            </p>
          </div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field name="username" component={TextField} hintText="用户名" floatingLabelText="用户名" />
            <Field name="password" component={TextField} hintText="密码" floatingLabelText="密码" type="password" />
            <RaisedButton
              {...css(styles.submitButton)}
              type="submit"
              label="登录"
              disabled={invalid || submitting}
              fullWidth
              secondary
            />
            <div {...css(styles.error)}>{error}</div>
          </form>
        </Paper>
      </div>
    )
  }
}

Login.propTypes = propTypes

const mapStateToProps = ($$state) => {
  const errorMsg = $$state.getIn(['errorMessage', 'LOGIN']) || ''
  return { error: errorMsg }
}

const mapDispatchToProps = dispatch => ({
  actionsCreators: bindActionCreators(APIActionCreators, dispatch),
})

export default reduxForm({
  form: 'login',
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(Login))
