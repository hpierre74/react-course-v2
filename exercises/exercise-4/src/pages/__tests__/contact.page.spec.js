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

  it('should contain Button as Link', () => {
    expect(wrapper.find(Button).prop('component')).toBe(Link);
    expect(wrapper.find(Button).prop('to')).toBe('/');
  });
});
