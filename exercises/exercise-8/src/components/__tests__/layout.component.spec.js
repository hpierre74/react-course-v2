import React from 'react';

import { shallow } from 'enzyme';

import { Layout } from '../layout.component';

let wrapper;

const getWrapper = () =>
  shallow(
    <Layout>
      <p>foo</p>
    </Layout>,
  );

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = getWrapper();
});

describe('<Layout />', () => {
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find('NavBar').exists()).toBeTruthy();
    });
  });
});
