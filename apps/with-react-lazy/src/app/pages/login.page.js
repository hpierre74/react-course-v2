import React from 'react';

import { Layout } from '../components/layout.component';
import { Login } from '../modules/user/components/login.component';

export const LoginPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};
