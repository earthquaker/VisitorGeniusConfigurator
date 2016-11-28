import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale-provider/en_US';
import './index.css';

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <App />
    </LocaleProvider>,
  document.getElementById('root')
);
