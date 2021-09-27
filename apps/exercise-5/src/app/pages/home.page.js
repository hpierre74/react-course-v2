import React from 'react';

import { Layout } from '../components/layout.component';
import { ArticlesList } from '../modules/articles/articlesList.component';

export const HomePage = () => {
  return (
    <Layout data-testid="app">
      <h2 data-testid="app-title">Home Page</h2>
      <ArticlesList data-testid="articles-list" />
    </Layout>
  );
};
