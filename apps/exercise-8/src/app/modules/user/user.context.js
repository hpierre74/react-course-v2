import React from 'react';

import { userReducer, initialState } from './user.reducer';

import { dispatchThunk } from '../../utils/context.utils';
import { CHILDREN_PROP_TYPES } from '../../constants/proptypes.constants';
import { usePersistedUser } from './user.hooks';

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const UserProvider = ({ children }) => {
  const user = usePersistedUser();
  const updatedState = user && { user };
  const [state, dispatch] = React.useReducer(
    userReducer,
    updatedState || initialState,
  );
  console.log({ updatedState, initialState, user, state });
  const getState = React.useCallback(() => state, [state]);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatchThunk(dispatch, getState)}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

UserProvider.propTypes = {
  children: CHILDREN_PROP_TYPES,
};

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

function useUser() {
  return [useUserState(), useUserDispatch()];
}

export { UserProvider, useUser, useUserState, useUserDispatch };
