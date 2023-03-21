import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'animate.css';
import './index.css';
import 'react-notifications-component/dist/theme.css';
import App from './app';
import AppErrorBoundary from './AppErrorBoundary';

import { Provider } from 'react-redux';
import store from './states/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppErrorBoundary>
          <App />
        </AppErrorBoundary>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
