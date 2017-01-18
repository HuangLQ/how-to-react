import React, { PropTypes } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { withStyles } from '../withStyles'

const propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object.isRequired,
}

const App = ({ theme, children }) => {
  const muiTheme = getMuiTheme({ fontFamily: theme.font.fontFamily })

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        {children}
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes = propTypes

export default withStyles()(App)
