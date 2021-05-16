import React from 'react';

import { shallow } from 'enzyme';

import { AboutPage } from '../about.page';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const getWrapper = () => shallow(<AboutPage />);

let wrapper;

describe('<AboutPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = getWrapper();
  });

  it('should contain Button as Link', () => {
    expect(wrapper.find(Button).prop('component')).toBe(Link);
    expect(wrapper.find(Button).prop('to')).toBe('/');
  });

  it('should contain h2', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();
  });
});
