import React, {Component} from 'react';
import {Row, Col} from 'antd';

import { Progress } from 'antd';

import AppHeader from './../AppHeader';
import AppMenu from './../AppMenu';

class Statistics extends Component {
  render() {
    return (
      <div>
        <AppHeader />

        <Row>
          <Col span={4}>
            <AppMenu />
          </Col>
          <Col span={20}>
            <div style={{padding:20}}>
              <Col span={12}>
                <h3>Engagement</h3>
                <Progress percent={50} status="active"/>
                <Progress percent={70} status="exception"/>
                <Progress percent={100}/>
              </Col>
              <Col span={12}>
                <h3>Actions</h3>
                <Progress percent={50} status="active"/>
                <Progress percent={70} status="exception"/>
                <Progress percent={100}/>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Statistics;