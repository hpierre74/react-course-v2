import { useUser, useUserState, useUserDispatch } from '../user.context';

describe('user.context', () => {
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
