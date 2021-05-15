import React from 'react';

import { shallow } from 'enzyme';

import { Cart } from '../cart.component';
import MockedArticles from '../../../../../../fixtures/articles.json';
import { useCart } from '../../cart.context';
import { Card, CardContent, List, Typography } from '@material-ui/core';

jest.mock('../../cart.context', () => ({
  useCart: jest.fn().mockReturnValue([{ articles: {} }, jest.fn()]),
}));

const getWrapper = () => shallow(<Cart />);

const articles = MockedArticles.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});

describe('<Cart />', () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    useCart.mockReturnValue([{ articles }, jest.fn()]);
    wrapper = getWrapper();
  });

  describe('Snapshot', () => {
    it('should render correctly with articles', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find(Card).exists()).toBeTruthy();
      expect(wrapper.find(Typography).exists()).toBeTruthy();
      expect(wrapper.find(CardContent).exists()).toBeTruthy();
      expect(wrapper.find(List).exists()).toBeTruthy();
    });

    it('should contain the correct list markup', () => {
      expect(wrapper.find(List).children()).toHaveLength(MockedArticles.length);

      return expect(
        wrapper
          .find(List)
          .children()
          .map(node => node.prop('to')),
      ).toEqual(MockedArticles.reduce((acc, curr) => [...acc, `/articles/${curr.slug}`], []));
    });
  });
});
