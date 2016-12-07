import React, {Component} from 'react';
import '../styles/App.css';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../store';

const history = syncHistoryWithStore(browserHistory, store);

import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import Engage from './Engage/Engage';
import Statistics from './Statistics/Statistics';
import Settings from './Settings/Settings';
import Howto from './HowTo/Howto';

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Route path='/' component={Login}/>
        <Route path='register' component={Register}/>
        <Route path='dashboard' component={Dashboard}/>
        <Route path='engage' component={Engage}/>
        <Route path='settings' component={Settings}/>
        <Route path='statistics' component={Statistics}/>
        <Route path='howto' component={Howto}/>
        <Route path='editproject/:projectKey' component={Dashboard}/>
      </Router>
    );
  }
}

export default App;