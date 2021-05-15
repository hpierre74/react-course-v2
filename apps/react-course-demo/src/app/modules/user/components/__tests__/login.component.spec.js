import React from 'react';

import { shallow } from 'enzyme';

import { Login } from '../login.component';
import { useInput } from '../../../../hooks/useInput.hook';
import { Button, TextField } from '@material-ui/core';
import { login } from '../../user.actions';

jest.mock('../../user.context.js', () => ({
  useUserDispatch: jest.fn().mockReturnValue(args => (typeof args === 'function' ? args() : args)),
}));

jest.mock('../../user.actions.js', () => ({ login: jest.fn() }));

jest.mock('../../../../hooks/useInput.hook.js', () => ({
  useInput: jest.fn().mockReturnValue(['', jest.fn()]),
}));

let wrapper;

describe('<Login/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Login />);
  });
  describe('Snapshot', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Markup checks', () => {
    it('should render a Button', () => {
      expect(wrapper.find(Button).text()).toBe('Sign In');
    });

    describe('TextFields', () => {
      it('should render a first TextField', () => {
        expect(
          wrapper
            .find(TextField)
            .first()
            .prop('name'),
        ).toBe('email');
      });
      it('should render a second TextField', () => {
        expect(
          wrapper
            .find(TextField)
            .last()
            .prop('name'),
        ).toBe('password');
      });
    });
  });

  describe('Hooks', () => {
    it('should call useInput twice', () => {
      expect(useInput).toHaveBeenCalled();
    });
  });

  describe('Interaction checks', () => {
    it('should dispatch login on submit', () => {
      shallow(<Login />)
        .find('form')
        .invoke('onSubmit')({ preventDefault: jest.fn() });

      expect(login).toBeCalled();
    });
  });
});
