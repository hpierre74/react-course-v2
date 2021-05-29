import React from 'react';
import ReactDOM from 'react-dom';
import { ExerciseContainer } from '@react-course-v2/course-hints';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import App from './app/app';

const theme = createMuiTheme({
  spacing: (n) => n * 4,
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ExerciseContainer>
      <App />
    </ExerciseContainer>
  </ThemeProvider>,
  document.getElementById('root')
);
