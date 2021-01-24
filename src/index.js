import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/components/App';
import './index.css';
import './fonts/Starjedi.ttf'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App/>
  </ThemeProvider>
  , document.getElementById('root')
);
