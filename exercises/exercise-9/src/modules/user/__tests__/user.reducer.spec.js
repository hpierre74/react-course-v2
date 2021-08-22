import { LOGIN, LOGOUT } from '../user.actions';
import { userReducer, initialState } from '../user.reducer';

describe('user.reducer', () => {
  describe('LOGIN', () => {
    it('should set user in the state', () => {
      expect(
        userReducer(initialState, { type: LOGIN, user: { id: 'foo' } }),
      ).toMatchObject({
        ...initialState,
        user: { id: 'foo' },
      });
    });
  });

  describe('LOGOUT', () => {
    it('should set user to null', () => {
      const state = {
        ...initialState,
        user: { id: 'foo' },
      };

      expect(userReducer(state, { type: LOGOUT, id: 'foo' })).toMatchObject({
        ...state,
        user: null,
      });
    });
  });
});
