import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Layout } from '../components/layout.component';
import { Article } from '../modules/articles/components/article.component';
import { CartLayout } from '../modules/cart/components/cartLayout.component';

export const ArticlePage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" m={1}>
        <h2>Article {id}</h2>
        <Button component={Link} to="/" color="secondary" variant="outlined">
          Return to Home
        </Button>
      </Box>
      <CartLayout>
        <Article id={id} />
      </CartLayout>
    </Layout>
  );
};
