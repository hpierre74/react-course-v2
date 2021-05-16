import React from 'react';

import { shallow } from 'enzyme';

import { Grid } from '@material-ui/core';

import { ArticlesList } from '../articlesList.component';
import MockedArticles from '../../../../../../fixtures/articles.json';
import * as selector from '../../articles.selectors';

let wrapper;

jest.mock('../../articles.selectors');
selector.useArticlesSelector = jest.fn().mockReturnValue(MockedArticles);

const getWrapper = () => shallow(<ArticlesList />);

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = getWrapper();
});

describe('<ArticlesList />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find(Grid).children()).toHaveLength(MockedArticles.length);

      return expect(
        wrapper
          .find(Grid)
          .children()
          .map(node => node.prop('article')),
      ).toMatchObject(MockedArticles);
    });
  });
});
