import React from 'react';
import { render, act } from '@testing-library/react';
import mockArticles from '../assets/articles.json';

import App from './app';

jest.mock('@react-course-v2/api', () => ({
  getArticles: jest.fn().mockResolvedValue(mockArticles),
}));

describe('App', () => {
  it('should render successfully', async () => {
    let wrapper = { baseElement: undefined };
    await act(async () => {
      wrapper = render(<App />);
    });

    const { baseElement } = wrapper;
    expect(baseElement).toBeTruthy();
  });
});
