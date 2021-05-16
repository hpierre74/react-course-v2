import React from 'react';

import { shallow } from 'enzyme';

import { CartLayout } from '../cartLayout.component';
import { Grid } from '@material-ui/core';

jest.mock('../../cart.context', () => ({
  useCart: jest.fn().mockReturnValue([{ articles: {} }, jest.fn()]),
}));

const getWrapper = () =>
  shallow(
    <CartLayout>
      <p>foo</p>
    </CartLayout>,
  );

describe('<Cart />', () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = getWrapper();
  });

  describe('Snapshot', () => {
    it('should render correctly with articles', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find('Cart').exists()).toBeTruthy();
      expect(wrapper.find(Grid).exists()).toBeTruthy();
      expect(wrapper.find('p').text()).toBe('foo');
    });
  });
});
