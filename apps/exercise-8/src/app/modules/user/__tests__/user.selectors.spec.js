import { getUser, isUserConnected } from '../user.selectors';

describe('user.selectors', () => {
  describe('getUser', () => {
    it('should return user', () => {
      expect(getUser({ user: { foo: 'bar' } })).toEqual({ foo: 'bar' });
    });
  });

  describe('isUserConnected', () => {
    it('should return false when user is falsy', () => {
      expect(isUserConnected({ user: null })).toBeFalsy();
    });

    it('should return true when user is truthy', () => {
      expect(isUserConnected({ user: {} })).toBeTruthy();
    });
  });
});
