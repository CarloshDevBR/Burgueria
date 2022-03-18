import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './style/globalStyles.js'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
