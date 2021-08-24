# course-hints

This library was generated with [Nx](https://nx.dev).

## Why

This library exports the `ExerciseContainer` component which wraps every exercises App components in the `apps` directory.
It fetches the instructions from the README of the exercise, and display a Button in the bottom right corner of the screen.
Clicking the button opens a modal with the instructions so it can be read outside the IDE in a nicely way.

## How

A few react components to:

- fetch the instructions and pass it to react-markdown
- render the button and modal

## Usage

```tsx
// in main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ExerciseContainer } from '@react-course-v2/course-hints';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import App from './app/app';

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
```

## Running unit tests

Run `nx test course-hints` to execute the unit tests via [Jest](https://jestjs.io).
