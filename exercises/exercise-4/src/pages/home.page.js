import React, { useState, useEffect } from 'react';

import { Layout } from '../components/layout.component';

import { getArticles } from '../utils/api.utils';

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles.length !== 0) {
      return;
    }
    getArticles()
      .then(setArticles)
      .catch(console.error);
  }, [articles]);

  return (
    <Layout data-testid="app">
      <h2 data-testid="app-title">Home Page</h2>
      <div data-testid="articles-container">
        <h4 data-testid="articles-title">Articles</h4>
        <ul data-testid="articles-list">
          {articles.length > 0 &&
            articles.map(({ id, name }) => (
              <li data-testid={`article-${id}`} key={id}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
};
