import React from 'react';

import { shallow } from 'enzyme';

import { Article } from '../article.component';
import MockedArticles from '../../../../../../fixtures/articles.json';
import * as selector from '../../articles.selectors';

jest.mock('../../articles.selectors');
selector.useArticlesSelector = jest.fn().mockReturnValue(MockedArticles);

const getWrapper = id => shallow(<Article id={id} />);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<Article />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(getWrapper(MockedArticles[0].slug)).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(
        getWrapper(MockedArticles[0].slug)
          .find('ArticleCard')
          .prop('article'),
      ).toMatchObject(MockedArticles[0]);
    });

    it('should be null when no id is passed', () => {
      expect(getWrapper('foo')).toBeEmptyRender();
    });
  });
});
