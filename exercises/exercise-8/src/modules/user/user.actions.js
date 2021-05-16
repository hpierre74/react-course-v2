import { signIn, signOut } from '../../utils/api.utils';
import { getUser } from './user.selectors';

export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';

export const login = (email, password) => async dispatch => {
  try {
    const user = await signIn(email, password);

    localStorage.setItem('user', JSON.stringify(user));

    return dispatch({ type: LOGIN, user });
  } catch (error) {
    dispatch({ type: LOGIN, error });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    const user = getUser(getState());
    if (!user) return;

    localStorage.removeItem('user');

    await signOut(user);

    return dispatch({ type: LOGOUT, user });
  } catch (error) {
    dispatch({ type: LOGOUT, error });
  }
};
