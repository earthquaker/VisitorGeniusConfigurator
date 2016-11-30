import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';

import AppHeader from './../AppHeader';
import AppMenu from './../AppMenu';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <AppHeader />

        <Row>
          <Col span={4}>
            <AppMenu />
          </Col>
          <Col span={20}>
            <div style={{padding: '30px'}}>
              <Row>
                <Col span="8">
                  <Card title="Engage Stories">0</Card>
                </Col>
                <Col span="8">
                  <Card title="Engage Hits">0</Card>
                </Col>
                <Col span="8">
                  <Card title="Engage Actions">0</Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;