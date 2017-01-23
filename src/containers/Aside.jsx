import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { push } from 'react-router-redux'

import { DropDownMenu, MenuItem, Avatar, Drawer } from 'material-ui'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import { GridList, GridTile } from 'material-ui/GridList'

import { css, withStyles } from '../withStyles'

import userBG from '../img/user-bg.jpg'
import avatar from '../img/avatar.jpg'

const SelectableList = makeSelectable(List)

const mapDispatchToProps = dispatch => ({
  actionsCreators: bindActionCreators({ push }, dispatch),
})

const propTypes = {
  location: PropTypes.object.isRequired,
  styles: PropTypes.object,
  theme: PropTypes.object,
}

const defaultProps = {
  styles: {},
  theme: {},
}

@connect(null, mapDispatchToProps)
@withStyles(({ zIndex }) => ({
  container: {
    zIndex: zIndex.drawer - 100,
    overflow: 'hidden',
  },
  user: {
    backgroundSize: 'cover',
    padding: '10px 15px',
    background: `url(${userBG})`,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    color: '#fff',
    fontSize: 13,
  },
  gridList: {
    width: '100%',
  },
}))
@immutableRenderDecorator
class Aside extends Component {
  render() {
    const { location, styles, theme } = this.props

    const {
      ActionCardGiftcard,
      ActionAccountBalanceWallet,
      ActionAssignment,
      ActionPermContactCalendar,
    } = theme.svgIcon

    return (
      <Drawer open containerClassName={css(styles.container).className}>
        <div {...css(styles.user)}>
          <GridList cellHeight={75} cols={3} {...css(styles.gridList)}>
            <GridTile cols={1} style={{ textAlign: 'right', top: 10 }}>
              <Avatar src={avatar} size={55} />
            </GridTile>
            <GridTile cols={2}>
              <DropDownMenu value={1} underlineStyle={{ display: 'none' }} labelStyle={{ color: '#fff' }}>
                <MenuItem value={1} primaryText="黄烈钦" />
                <MenuItem value={2} primaryText="登出" />
              </DropDownMenu>
              <div style={{ paddingLeft: 24 }}>
                {'管理员'}
              </div>
            </GridTile>
          </GridList>
        </div>
        <SelectableList value={location.pathname} onChange={this.onChangeList}>
          <ListItem primaryText="商品管理" value="/goods" leftIcon={<ActionCardGiftcard />} />
          <ListItem primaryText="分类管理" value="/classify" leftIcon={<ActionAccountBalanceWallet />} />
          <ListItem primaryText="订单管理" value="/order" leftIcon={<ActionAssignment />} />
          <ListItem primaryText="账号管理" value="/account" leftIcon={<ActionPermContactCalendar />} />
        </SelectableList>
      </Drawer>
    )
  }
}

Aside.propTypes = propTypes
Aside.defaultProps = defaultProps

export default Aside
