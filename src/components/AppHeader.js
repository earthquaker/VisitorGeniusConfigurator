import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

class Header extends Component {

  render() {
    return (
        <Menu mode="horizontal" theme="light">
          <Menu.Item key="engage" style={{fontSize: '17px'}}>
            Engage Layer
          </Menu.Item>
          <Menu.Item key="logout" style={{float: 'right'}}>
            <Icon type="logout"/>Logout
          </Menu.Item>
        </Menu>
    );
  }
}

export default Header;