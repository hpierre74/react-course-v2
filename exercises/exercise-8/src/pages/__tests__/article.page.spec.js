import React from 'react';

import { shallow } from 'enzyme';

import { ArticlePage } from '../article.page';

let wrapper;

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ id: 'foo' }),
}));

const getWrapper = () => shallow(<ArticlePage />);

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = getWrapper();
});

describe('<ArticlePage />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find('Layout').exists()).toBeTruthy();
      expect(wrapper.find(`Article`).exists()).toBeTruthy();
    });
  });
});
