import React from 'react';
import { Link } from 'react-router-dom';

import { shallow } from 'enzyme';

import { ContactPage } from '../pages/contact.page';

const getWrapper = () => shallow(<ContactPage />);

let wrapper;

describe('<ContactPage />', () => {
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
