import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ExerciseContainer } from './__hints__/dialog';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: n => n * 4,
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ExerciseContainer>
      <App />
    </ExerciseContainer>
  </ThemeProvider>,
  document.getElementById('root'),
);
