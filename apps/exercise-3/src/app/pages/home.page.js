import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getArticles } from '@react-course-v2/api';

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles.length !== 0) {
      return;
    }
    getArticles().then(setArticles).catch(console.error);
  }, [articles]);

  return (
    <div>
      <h2 data-testid="app-title">Home Page</h2>
      <Link data-testid="link-to-about" to="/about">
        About Page
      </Link>
      <Link data-testid="link-to-contact" to="/contact">
        Contact Page
      </Link>
      <div>
        <h4>Articles</h4>
        <ul data-testid="articles-list">
          {articles.length > 0 &&
            articles.map(({ id, name }) => (
              <li data-testid={`article-${id}`} key={id}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
