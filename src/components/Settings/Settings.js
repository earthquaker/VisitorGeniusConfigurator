import React, {Component} from 'react';
import {Row, Col, Tabs, Radio, Card, Tooltip} from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

import AppHeader from './../AppHeader';
import AppMenu from './../AppMenu';

class Settings extends Component {
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const toolT = (
      <Tooltip placement="top" title={"Select type of navigation your website uses. (Normal websites use Default page load, Single Page Applications uses Hashchange or Popstate)."}>
        <a href="#">?</a>
      </Tooltip>
    );

    return (
      <div>
        <AppHeader />

        <Row>
          <Col span={4}>
            <AppMenu />
          </Col>
          <Col span={20}>
            <Tabs defaultActiveKey="1" style={{padding:30}}>
              <TabPane tab="Website Settings" key="1">
                <Card title="Navigation Type" extra={toolT} style={{ width: 300 }}>
                  <RadioGroup>
                    <Radio style={radioStyle} value={1}>Default page load</Radio>
                    <Radio style={radioStyle} value={2}>Hashchange</Radio>
                    <Radio style={radioStyle} value={3}>Popstate</Radio>
                  </RadioGroup>
                </Card>
              </TabPane>
              <TabPane tab="Account Settings" key="2">Account Settings</TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settings;