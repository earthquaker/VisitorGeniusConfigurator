import React, {Component} from 'react';
import {Row, Col, Form, Icon, Input, Button, Card} from 'antd';
const FormItem = Form.Item;

import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

import AppHeader from './../AppHeader';

class Login extends Component {

  loginUser(e) {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    this.props.loginUser(email, password);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <AppHeader />
        <Row>
          <Col span={6} offset={9}>
            <Card title="Log in" style={{marginTop:'20px'}}>
              <Form onSubmit={(e)=>this.loginUser(e)} className="login-form">
                <FormItem>
                  <Input addonBefore={<Icon type="mail" />} name="email" placeholder="Email" required/>
                </FormItem>
                <FormItem>
                  <Input addonBefore={<Icon type="lock" />} name="password" type="password" placeholder="Password" required/>
                </FormItem>
                <Button type="ghost" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: (email, password) => dispatch(authActions.loginUser(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);