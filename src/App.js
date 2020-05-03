import React from 'react';
import 'typeface-roboto';
import { Provider } from 'react-redux';

import Routes from './pages/Routes';
import store from './redux/store';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import baseOptions from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={baseOptions}>
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default App;
