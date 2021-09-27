import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import { ArticleCard } from './articleCard.component';
import { getArticles } from '@react-course-v2/api';

export function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles.length !== 0) {
      return;
    }
    getArticles().then(setArticles).catch(console.error);
  }, [articles]);

  return (
    <Grid container spacing={4} data-testid="articles-list">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Grid>
  );
}
