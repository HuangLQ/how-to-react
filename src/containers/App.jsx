import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from 'react-title-component'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { withStyles } from '../withStyles'
import TitleHash from '../constants/TitleHash'

const propTypes = {
  children: PropTypes.element,
  pathname: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}

const App = ({ pathname, theme, children }) => {
  const title = TitleHash[pathname] || '商城'

  const muiTheme = getMuiTheme({ fontFamily: theme.font.fontFamily })

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Title render={title} />
        {children}
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes = propTypes

export default connect((state, ownProps) => (
  {
    pathname: ownProps.location.pathname,
  }
))(withStyles()(App))
