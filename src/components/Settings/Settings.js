import React, {Component} from 'react';
import {Row, Col, Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import AppHeader from './../AppHeader';
import AppMenu from './../AppMenu';

class Settings extends Component {
  render() {
    return (
      <div>
        <AppHeader />

        <Row>
          <Col span={4}>
            <AppMenu />
          </Col>
          <Col span={20}>
            <Tabs defaultActiveKey="1" style={{padding:30}}>
              <TabPane tab="Account Settings" key="1">Account Settings</TabPane>
              <TabPane tab="Website Settings" key="2">Website Settings</TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings;