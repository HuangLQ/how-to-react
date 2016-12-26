import { bindActionCreators } from 'redux'

const mapActions = (actions) => {
  return (dispatch) => { return { actions: bindActionCreators(actions, dispatch) } }
}

export default mapActions
