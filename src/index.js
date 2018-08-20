import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { MuiThemeProvider } from 'material-ui/styles';

ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>, 
  document.getElementById('root'));