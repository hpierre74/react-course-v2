import React from 'react';
import { render } from '@testing-library/react';

import { ExerciseContainer } from './exercise-container';

describe(' ExerciseContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExerciseContainer>foo</ExerciseContainer>);
    expect(baseElement).toBeTruthy();
  });
});
