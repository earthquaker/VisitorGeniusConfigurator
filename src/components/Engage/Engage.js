import React, {Component} from 'react';
import {Row, Col, Card, Button} from 'antd';

import AppHeader from './../AppHeader';
import AppMenu from './../AppMenu';

class Engage extends Component {
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
                <Col span="24">
                  <div className="gutter-box">
                    <Button size="large" type="ghost" icon="plus-circle-o">New Story</Button>
                  </div>
                </Col>
                <Col lg={{span:6}} sm={{span:24}}>
                  <div className="gutter-box">
                    <Card title="2 products > discount banner">
                      When customer has 2 products in the cart, give them a discount banner.
                      <div>
                        <Button type="ghost">Delete</Button>
                        <Button type="ghost">Edit</Button>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Engage;