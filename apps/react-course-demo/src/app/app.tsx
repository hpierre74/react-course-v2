import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from './modules/user/user.context';

import { AppRoutes } from './modules/routing/components/routes.component';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}
