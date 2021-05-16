import React from 'react';

import { shallow } from 'enzyme';

import { ContactPage } from '../contact.page';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

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

  it('should contain Button as Link', () => {
    expect(wrapper.find(Button).prop('component')).toBe(Link);
    expect(wrapper.find(Button).prop('to')).toBe('/');
  });

  it('should contain h2', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();
  });
});
