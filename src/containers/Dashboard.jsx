import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import withWidth, { SMALL } from 'material-ui/utils/withWidth'
import ui from 'redux-ui'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'

import spacing from 'material-ui/styles/spacing'

const uiState = {
  asideOpen: true,
  asideOpenByHeader: false,
  showMenuIconButton: false,
  width: SMALL,
}

const styles = {
  root: {
    paddingTop: spacing.desktopKeylineIncrement,
    paddingBottom: 50,
    paddingLeft: 256,
  },
  content: {
    margin: spacing.desktopGutter,
  },
  container: {
    minHeight: '100%',
    position: 'relative',
  },
}

const propTypes = {
  children: PropTypes.element,
  width: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
}

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillReceiveProps(nextProps) {
    const {
      width,
      updateUI,
      ui,
    } = nextProps

    if (width !== ui.width) {
      updateUI({
        width: width,
        asideOpenByHeader: false,
      })
    }
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <div style={styles.container}>
        <Header />
        <div style={styles.root}>
          <div style={styles.content}>
            {children}
          </div>
        </div>
        <Aside location={location} />
        <Footer />
      </div>
    )
  }
}

Dashboard.propTypes = propTypes

export default withWidth()(ui({ state: uiState })(immutableRenderDecorator(Dashboard)))
