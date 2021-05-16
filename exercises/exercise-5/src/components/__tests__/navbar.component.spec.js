import React from 'react';

import { shallow } from 'enzyme';

import { AppBar, IconButton, Menu, Typography } from '@material-ui/core';

import NavBar from '../navbar.component';

let wrapper;

const getWrapper = () => shallow(<NavBar />);

describe('<NavBar />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = getWrapper();
  });
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should contain the correct markup', () => {
      expect(wrapper.find(AppBar).exists()).toBeTruthy();
      expect(wrapper.find(Typography).text()).toBe('Shopping App');
    });
  });

  describe('Interaction checks', () => {
    it('should sur anchorEl from clicked item', () => {
      expect(wrapper.find(Menu).prop('open')).toBeFalsy();
      wrapper.find(IconButton).prop('onClick')({ currentTarget: 'foo' });
      wrapper.update();
      expect(wrapper.find(Menu).prop('open')).toBeTruthy();
    });
  });
});
