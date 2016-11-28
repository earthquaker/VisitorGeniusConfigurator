import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale-provider/en_US';
import './styles/index.css';

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <App />
    </LocaleProvider>,
  document.getElementById('root')
);
