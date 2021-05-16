import React from 'react';

import { shallow } from 'enzyme';

import {
  useArticles,
  useArticlesState,
  useArticlesDispatch,
  ArticlesProvider,
} from '../articles.context';

describe('articles.context', () => {
  describe('<ArticlesProvider />', () => {
    it('should render nested providers', () => {
      expect(
        shallow(
          <ArticlesProvider>
            <div />
          </ArticlesProvider>,
        ),
      ).toMatchSnapshot();
    });

    it('should have property value set to the articles state articles', () => {
      expect(
        shallow(
          <ArticlesProvider>
            <div />
          </ArticlesProvider>,
        )
          .find('ContextProvider')
          .first()
          .prop('value'),
      ).toMatchObject({ articles: [] });
    });
  });

  describe('useArticlesDispatch', () => {
    it('should be defined', () => {
      expect(typeof useArticlesDispatch).toBe('function');
    });
  });

  describe('useArticlesState', () => {
    it('should be defined', () => {
      expect(typeof useArticlesState).toBe('function');
    });
  });

  describe('useArticles', () => {
    it('should be defined', () => {
      expect(typeof useArticles).toBe('function');
    });
  });
});
