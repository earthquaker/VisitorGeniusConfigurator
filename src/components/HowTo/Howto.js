import React, {Component} from 'react';
import {Row, Col, Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import AppHeader from './../AppHeader';
import AppMenu from './../AppMenu';

class Howto extends Component {
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
              <TabPane tab="Installation" key="1">Installation</TabPane>
              <TabPane tab="Setup Action" key="2">Setup Action</TabPane>
              <TabPane tab="FAQ" key="3">FAQ</TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Howto;