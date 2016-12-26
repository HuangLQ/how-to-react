import React, { Component, PropTypes } from 'react'
import ui from 'redux-ui'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { connect } from 'react-redux'

import { SMALL } from 'material-ui/utils/withWidth'
import IconButton from 'material-ui/IconButton'
import { cyan500, grey50 } from 'material-ui/styles/colors'

const propTypes = {
  width: PropTypes.number.isRequired,
}

const styles = {
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    clear: 'both',
    backgroundColor: cyan500,
    height: '50px',
    lineHeight: '50px',
    padding: '0 15px',
    textAlign: 'left',
    fontWeight: 300,
  },
  content: {
    padding: '0 15px',
    maxWidth: '100% !important',
  },
  copyright: {
    color: grey50,
  },
}

class Footer extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {
      ui,
    } = this.props

    if (ui.width === SMALL) {
      styles.root = Object.assign({}, styles.root, { marginLeft: 0 })
    } else {
      styles.root = Object.assign({}, styles.root, { marginLeft: 256 })
    }

    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <span style={styles.copyright}>Copyright © 2015 <a href="http://themeforest.net/user/geekslabs/portfolio?ref=geekslabs" target="_blank">GeeksLabs</a> All rights reserved.</span>
        </div>
      </div>
    )
  }
}

Footer.propTyps = propTypes

export default ui()(immutableRenderDecorator(Footer))
