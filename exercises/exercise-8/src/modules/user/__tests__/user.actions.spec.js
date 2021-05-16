import { signIn, signOut } from '../../../utils/api.utils';
import { LOGIN, login, LOGOUT, logout } from '../user.actions';

const user = { id: 'xyz', mail: 'foo@bar.com', name: 'Foo Bar' };

jest.mock('../../../utils/api.utils.js');

describe('user.actions', () => {
  let dispatch, getState;
  beforeEach(() => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    getState = jest.fn();
    signIn.mockResolvedValue(user);
    signOut.mockReturnValue(user);
  });

  describe('login', () => {
    it('should dispatch LOGIN', async () => {
      await login('foo', 'bar')(dispatch, getState);
      return expect(dispatch).toBeCalledWith({ type: LOGIN, user });
    });

    it('should call signIn', async () => {
      await login('foo', 'bar')(dispatch, getState);
      return expect(signIn).toBeCalledWith('foo', 'bar');
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      getState.mockReturnValueOnce({ user });
    });

    it('should dispatch LOGOUT', async () => {
      await logout()(dispatch, getState);
      return expect(dispatch).toBeCalledWith({ type: LOGOUT, user });
    });

    it('should call signOut', async () => {
      await logout()(dispatch, getState);
      return expect(signOut).toBeCalledWith(user);
    });
  });
});
