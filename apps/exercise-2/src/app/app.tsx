import React, { useState, useEffect } from 'react';
import { getArticles, ArticleInterface } from '@react-course-v2/api';

const App = () => {
  const [articles, setArticles] = useState<[]|ArticleInterface[]>([]);

  useEffect(() => {
    if (articles.length === 0) {
      getArticles()
        .then(res => setArticles(res))
        .catch(err => console.error(err));
    }
  }, [articles]);

  return (
    <div>
      <h2>Home Page</h2>
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

export default App;
