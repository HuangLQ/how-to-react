import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

import AppBar from 'material-ui/AppBar'

import { css, withStyles } from '../withStyles'

const logo = require('../img/materialize-logo.png')

const propTypes = {
  styles: PropTypes.object,
}

const defaultProps = {
  styles: {},
}

@withStyles(({ zIndex }) => ({
  appBar: {
    position: 'fixed',
    zIndex: zIndex.appBar + 1,
    top: 0,
    marginLeft: 256,
  },
  logo: {
    height: '27px',
    verticalAlign: 'middle',
  },
}))
@immutableRenderDecorator
// eslint-disable-next-line
class Header extends Component {
  render() {
    const { styles } = this.props
    return (
      <AppBar
        title={<img {...css(styles.logo)} src={logo} alt="material logo" />}
        zDepth={1}
        {...css(styles.appBar)}
      />
    )
  }
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
