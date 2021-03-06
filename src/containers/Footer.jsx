import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

import { css, withStyles } from '../withStyles'

const propTypes = {
  styles: PropTypes.object.isRequired,
}

const defaultProps = {
  styles: {},
}

@withStyles(({ colors }) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.grey900,
    height: 50,
    lineHeight: '50px',
    padding: '0 15px',
    marginLeft: 256,
  },
  content: {
    padding: '0 15px',
    maxWidth: '100%',
  },
  copyright: {
    color: colors.grey50,
  },
}))
@immutableRenderDecorator
// eslint-disable-next-line
class Footer extends Component {
  render() {
    const { styles } = this.props

    return (
      <div {...css(styles.root)}>
        <div {...css(styles.content)}>
          <span {...css(styles.copyright)}>Copyright © 2015 <a href="http://themeforest.net/user/geekslabs/portfolio?ref=geekslabs" target="_blank" rel="noopener noreferrer">GeeksLabs</a> All rights reserved.</span>
        </div>
      </div>
    )
  }
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer
