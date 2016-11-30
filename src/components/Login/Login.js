import React, {Component} from 'react';
import {Row, Col, Form, Icon, Input, Checkbox, Button, Card} from 'antd';

const FormItem = Form.Item;

import AppHeader from './../AppHeader';

const NormalLoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="ghost" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    );
  },
}));

class Login extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Row>
          <Col span={6} offset={9}>
            <Card title="Sign in" style={{marginTop:'20px'}}>
              <NormalLoginForm />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;