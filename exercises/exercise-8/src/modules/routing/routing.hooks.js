import { useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useUserState } from '../user/user.context';
import { PROTECTED_PATHS, ROUTES_PATHS_BY_NAMES } from './routing.constants';
import { isUserConnected } from '../user/user.selectors';

const { login: loginPath, home: homePath } = ROUTES_PATHS_BY_NAMES;

export const useLoginRedirect = () => {
  const state = useUserState();
  const isConnected = isUserConnected(state);
  const { pathname } = useLocation();
  const { push } = useHistory();

  const [initialRoute, setInitialRoute] = useState(pathname === loginPath ? homePath : pathname);

  const isProtectedRoute = PROTECTED_PATHS.includes(pathname);
  const isLoginRoute = useMemo(() => pathname === loginPath, [pathname]);

  useEffect(() => {
    if (isConnected && isLoginRoute) {
      push(initialRoute);
    }
  }, [isConnected, push, isLoginRoute, initialRoute]);

  useEffect(() => {
    if (!isConnected && isProtectedRoute) {
      setInitialRoute(pathname);
      push(loginPath);
    }
  }, [isConnected, push, pathname, isProtectedRoute]);
};
