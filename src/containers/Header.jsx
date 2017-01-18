import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import ui from 'redux-ui'

import { SMALL } from 'material-ui/utils/withWidth'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import { zIndex } from 'material-ui/styles'

const logo = require('../img/materialize-logo.png')

const propTypes = {
  uiKey: PropTypes.string.isRequired,
  ui: PropTypes.object.isRequired,
  updateUI: PropTypes.func.isRequired,
  resetUI: PropTypes.func.isRequired,
}

const styles = {
  appBar: {
    position: 'fixed',
    zIndex: zIndex.appBar + 1,
    top: 0,
  },
  logo: {
    height: '27px',
    verticalAlign: 'middle',
  },
}

class Header extends Component {
  constructor(props, content) {
    super(props, content)
    this.handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton.bind(this)
  }

  componentWillMount() {
    const {
      updateUI,
      ui,
    } = this.props

    if (ui.width === SMALL) {
      updateUI('showMenuIconButton', true)
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      updateUI,
      ui,
    } = nextProps

    if (ui.width === SMALL) {
      updateUI('showMenuIconButton', true)
    } else {
      updateUI('showMenuIconButton', false)
    }
  }

  handleTouchTapLeftIconButton() {
    this.props.updateUI({
      asideOpen: !this.props.ui.asideOpen,
      asideOpenByHeader: true,
    })
  }

  render() {
    const {
      ui,
    } = this.props

    return (
      <AppBar
        onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
        title={<img style={styles.logo} src={logo} alt="material logo" />}
        zDepth={1}
        style={styles.appBar}
        showMenuIconButton={ui.showMenuIconButton}
      />
    )
  }
}

Header.propTypes = propTypes

export default ui()(immutableRenderDecorator(Header))
