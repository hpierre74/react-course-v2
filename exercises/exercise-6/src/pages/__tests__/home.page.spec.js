import React from 'react';

import { shallow } from 'enzyme';

import { HomePage } from '../home.page';

let wrapper;

const getWrapper = () => shallow(<HomePage />);

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = getWrapper();
});

describe('<HomePage />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find('Layout').exists()).toBeTruthy();
      expect(wrapper.find(`[data-testid='app-title']`).text()).toBe(
        'Home Page',
      );
      expect(wrapper.find(`ArticlesList`).exists()).toBeTruthy();
    });
  });
});
