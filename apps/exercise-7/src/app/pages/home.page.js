import React from 'react';

import { Layout } from '../components/layout.component';
import { ArticlesList } from '../modules/articles/components/articlesList.component';
import { CartLayout } from '../modules/cart/components/cartLayout.component';

export const HomePage = () => {
  return (
    <Layout data-testid="app">
      <h2 data-testid="app-title">Home Page</h2>
      <CartLayout>
        <ArticlesList />
      </CartLayout>
    </Layout>
  );
};

