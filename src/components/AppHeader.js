import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';

class AppHeader extends Component {

  render() {
    return (
        <Menu mode="horizontal" theme="light">
          <Menu.Item key="engage" style={{fontSize: '17px'}}>
            Action Layer
          </Menu.Item>
          <Menu.Item key="logout" style={{float: 'right'}}>
            <span onClick={this.props.signOutUser}><Icon type="logout" />Logout</span>
          </Menu.Item>
        </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signOutUser: () => dispatch(authActions.signOutUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);