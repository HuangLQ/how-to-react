import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Drawer from 'material-ui/Drawer'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'
import { GridList, GridTile } from 'material-ui/GridList'

import { css, withStyles } from '../withStyles'
import { mapActions } from '../utils'

import userBG from '../img/user-bg.jpg'
import avatar from '../img/avatar.jpg'

const SelectableList = makeSelectable(List)

const propTypes = {
  location: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

class Aside extends Component {
  render() {
    const {
      location,
      styles,
      theme,
    } = this.props

    const {
      ActionCardGiftcard,
      ActionAccountBalanceWallet,
      ActionAssignment,
      ActionRecordVoiceOver,
      ActionPermContactCalendar,
    } = theme.svgIcon

    return (
      <Drawer {...css(styles.root)} open containerClassName={css(styles.container).className}>
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
          <ListItem primaryText="商品管理" value="/dashboard" leftIcon={<ActionCardGiftcard />} />
          <ListItem primaryText="分类管理" value="/" leftIcon={<ActionAccountBalanceWallet />} />
          <ListItem primaryText="订单管理" value="/" leftIcon={<ActionAssignment />} />
          <ListItem primaryText="客户消息" value="/" leftIcon={<ActionRecordVoiceOver />} />
          <ListItem primaryText="账号管理" value="/" leftIcon={<ActionPermContactCalendar />} />
        </SelectableList>
      </Drawer>
    )
  }
}

Aside.propTypes = propTypes

export default connect(null, mapActions(push))(withStyles(({ spacing, zIndex }) => ({
  root: {
    zIndex: zIndex.appBar,
  },
  container: {
    zIndex: zIndex.drawer - 100,
    top: spacing.desktopKeylineIncrement,
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
}), {
  flushBefore: true,
})(Aside))
