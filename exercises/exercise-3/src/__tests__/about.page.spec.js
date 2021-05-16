import React from 'react';
import { Link } from 'react-router-dom';

import { shallow } from 'enzyme';

import { AboutPage } from '../pages/about.page';

const getWrapper = () => shallow(<AboutPage />);

let wrapper;

describe('<AboutPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = getWrapper();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain Link', () => {
    expect(wrapper.find(Link).prop('to')).toBe('/');
  });

  it('should contain h2', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();
  });
});
