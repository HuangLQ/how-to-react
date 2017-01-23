import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

import ui from 'redux-ui'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import { withStyles, css } from '../withStyles'

const propTypes = {
  children: PropTypes.element,
  location: PropTypes.object.isRequired,
  styles: PropTypes.object,
}

const defaultProps = {
  children: PropTypes.node,
  styles: {},
}

@ui({
  state: {
    asideOpen: true,
  },
})
@withStyles(({ spacing }) => ({
  root: {
    minHeight: '100%',
    position: 'relative',
  },
  container: {
    paddingTop: spacing.desktopKeylineIncrement,
    paddingLeft: 256,
  },
  content: {
    padding: spacing.desktopGutter,
    paddingBottom: spacing.desktopGutter + 50,
  },
}))
@immutableRenderDecorator
// eslint-disable-next-line
class Dashboard extends Component {
  render() {
    const { children, styles, location } = this.props
    return (
      <div {...css(styles.root)}>
        <Header />
        <Aside location={location} />
        <div {...css(styles.container)}>
          <div {...css(styles.content)}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = propTypes
Dashboard.defaultProps = defaultProps

export default Dashboard
