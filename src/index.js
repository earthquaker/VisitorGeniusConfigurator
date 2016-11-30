import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/App';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Ant Design
import { LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale-provider/en_US';
import './styles/index.css';

// Firebase
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCm577yx4uU0TW5g_uFQH3wg_fUjAHUp88",
  authDomain: "flowerpower-c349a.firebaseapp.com",
  databaseURL: "https://flowerpower-c349a.firebaseio.com",
  storageBucket: "flowerpower-c349a.appspot.com",
  messagingSenderId: "29712322543"
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
