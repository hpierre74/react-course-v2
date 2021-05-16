
import React, { useState, useEffect } from 'react';
import { getArticles } from '@react-course-v2/api';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles.length === 0) {
      getArticles()
        .then(res => setArticles(res))
        .catch(err => console.error(err));
    }
  }, [articles]);

  return (
    <div data-testid="app">
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
    </div>
  );
};

export default App;
