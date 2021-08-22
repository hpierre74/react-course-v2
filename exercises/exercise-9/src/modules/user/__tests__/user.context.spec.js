import React from 'react';

import { shallow } from 'enzyme';

import {
  useUser,
  useUserState,
  useUserDispatch,
  UserProvider,
} from '../user.context';

describe('user.context', () => {
  describe('<UserProvider />', () => {
    it('should render nested providers', () => {
      expect(
        shallow(
          <UserProvider>
            <div />
          </UserProvider>,
        ),
      ).toMatchSnapshot();
    });

    it('should have property value set', () => {
      expect(
        shallow(
          <UserProvider>
            <div />
          </UserProvider>,
        )
          .find('ContextProvider')
          .first()
          .prop('value'),
      ).toMatchObject({ user: null });
    });
  });

  describe('useUserDispatch', () => {
    it('should be defined', () => {
      expect(typeof useUserDispatch).toBe('function');
    });
  });

  describe('useUserState', () => {
    it('should be defined', () => {
      expect(typeof useUserState).toBe('function');
    });
  });

  describe('useUser', () => {
    it('should be defined', () => {
      expect(typeof useUser).toBe('function');
    });
  });
});
