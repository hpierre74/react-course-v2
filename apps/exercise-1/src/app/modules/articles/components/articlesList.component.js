import React from 'react';

import Grid from '@material-ui/core/Grid';

import { ArticleCard } from './articleCard.component';

import { useArticlesSelector } from '../articles.selectors';

export function ArticlesList() {
  const articles = useArticlesSelector();

  return (
    <Grid container spacing={4} data-testid="articles">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Grid>
  );
}
