import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './fonts/MarvelRegular.ttf'
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App/>
  </ThemeProvider>
  , document.getElementById('root')
);