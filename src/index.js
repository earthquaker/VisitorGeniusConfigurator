import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/App';

// Redux
import store from './store';
import { Provider } from 'react-redux';
import * as authActions from './actions/authActions';

// Ant Design
import { LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale-provider/en_US';
import './styles/index.css';

// Firebase
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBfAEVb03MJaNt5ARYG_TY6lQBunW3Njac",
  authDomain: "visitorgenius.firebaseapp.com",
  databaseURL: "https://visitorgenius.firebaseio.com",
  storageBucket: "visitorgenius.appspot.com",
  messagingSenderId: "629876563710"
};
firebase.initializeApp(config);

const App = () => (
  <LocaleProvider locale={enUS}>
    <MyApp />
  </LocaleProvider>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

store.dispatch(authActions.onAuthStateChanged());