import { LOGIN, LOGOUT } from './user.actions';

export const initialState = {
  user: null,
};

export const userReducer = (state, action) => {
  if (action.error) {
    return { ...state, error: action.error };
  }

  switch (action.type) {
    case LOGIN: {
      return { ...state, user: action.user };
    }

    case LOGOUT: {
      return { ...state, user: null };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
