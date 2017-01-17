import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import aphroditeInterface from 'react-with-styles-interface-aphrodite'
import { css, withStyles, ThemeProvider } from 'react-with-styles'
import { spacing, zIndex, colors, typography, transitions } from 'material-ui/styles'
import * as svgIcon from 'material-ui/svg-icons'

const font = {
  fontFamily: '"Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif',
  fontStyle: 'normal',
  fontWeight: 'normal',
}
const defaultTheme = {
  colors,
  zIndex,
  spacing,
  typography,
  transitions,
  svgIcon,
  font,
}

ThemedStyleSheet.registerDefaultTheme(defaultTheme)
ThemedStyleSheet.registerInterface(aphroditeInterface)

export { css, withStyles, ThemeProvider, ThemedStyleSheet }
