import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router';

class AppMenu extends Component {

  render() {
    return (
      <Menu>
        <Menu.Item key="dashboard">
          <Link to={`dashboard`}>
            <Icon type="appstore-o"/>Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="engage">
          <Link to={`engage`}>
            <Icon type="heart-o"/>Engage Stories
          </Link>
        </Menu.Item>
        <Menu.Item key="statistics">
          <Link to={`statistics`}>
            <Icon type="bar-chart"/>Statistics
          </Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to={`settings`}>
            <Icon type="setting"/>Settings
          </Link>
        </Menu.Item>
        <Menu.Item key="howto">
          <Link to={`howto`}>
            <Icon type="file"/>How To
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;