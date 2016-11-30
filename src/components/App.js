import React, {Component} from 'react';
import '../styles/App.css';
import {Row, Col, Menu, Icon, Card} from 'antd';

class App extends Component {

  render() {
    return (
      <div>
        <Menu mode="horizontal" theme="light">
          <Menu.Item key="engage" style={{fontSize: '17px'}}>
            Engage Engine
          </Menu.Item>
          <Menu.Item key="logout" style={{float: 'right'}}>
            <Icon type="logout"/>Logout
          </Menu.Item>
        </Menu>

        <Row>
          <Col span={4}>
            <Menu>
              <Menu.Item key="dashboard">
                <Icon type="appstore-o"/>Dashboard
              </Menu.Item>
              <Menu.Item key="Engage">
                <Icon type="heart-o"/>Engage Stories
              </Menu.Item>
              <Menu.Item key="statistics">
                <Icon type="bar-chart"/>Statistics
              </Menu.Item>
              <Menu.Item key="settings">
                <Icon type="setting"/>Settings
              </Menu.Item>
              <Menu.Item key="installation">
                <Icon type="question"/>How To
              </Menu.Item>
            </Menu>
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

export default App;