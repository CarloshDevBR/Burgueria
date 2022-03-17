import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './style/globalStyles.js'
import Home from './pages/home/'

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
