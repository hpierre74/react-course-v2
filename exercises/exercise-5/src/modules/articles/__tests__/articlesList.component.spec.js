import React, { useEffect, useState } from 'react';

import { shallow } from 'enzyme';

import { Grid } from '@material-ui/core';

import { ArticlesList } from '../articlesList.component';

import MockedArticles from '../../../../../fixtures/articles.json';
import * as ApiUtils from '../../../utils/api.utils';

let wrapper;
const emptyArray = [];

ApiUtils.getArticles = jest.fn().mockResolvedValue(MockedArticles);

jest.mock('react', () =>
  global.mockReactWithHooks({ effect: true, state: true }),
);

const getWrapper = () => shallow(<ArticlesList />);

beforeEach(() => {
  jest.clearAllMocks();
  useEffect.mockClear();
  useState.mockClear();
  wrapper = getWrapper();
});

describe('<ArticlesList />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render list correctly', () => {
      useState.mockReturnValueOnce([MockedArticles, jest.fn()]);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find(Grid).exists()).toBeTruthy();
    });
  });

  describe('State checks', () => {
    // Don't test Jest mocks or React, it is useless
    // In the following example we test that our react mock is working
    // const [initialsArticles] = useState.mock.results[0].value;
    // expect(initialsArticles).toEqual(emptyArray);

    it('should call useState with an empty array', () => {
      expect(useState).toHaveBeenCalledWith(emptyArray);
    });
  });

  describe('Effects checks', () => {
    it('should call useEffect with a function and an empty array', () => {
      expect(useEffect).toHaveBeenCalledWith(expect.any(Function), [
        emptyArray,
      ]);
    });

    it('should call getArticles once', () => {
      expect(ApiUtils.getArticles).toHaveBeenCalledTimes(1);
    });

    it('should call getArticles once even when re-rendered', () => {
      wrapper.update();
      expect(ApiUtils.getArticles).toHaveBeenCalledTimes(1);
    });

    it('should call setArticles once with MockedArticles', () => {
      const [, setArticles] = useState.mock.results[0].value;
      expect(setArticles).toHaveBeenCalledWith(MockedArticles);
      expect(setArticles).toHaveBeenCalledTimes(1);
    });
  });
});
