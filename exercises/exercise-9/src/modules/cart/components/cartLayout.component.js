import React from 'react';

import Grid from '@material-ui/core/Grid';
import { CHILDREN_PROP_TYPES } from '../../../constants/proptypes.constants';
import { Cart } from './cart.component';

export function CartLayout({ children }) {
  return (
    <Grid container spacing={4} justify="space-between">
      <Grid item xs={12} sm={8} md={8}>
        {children}
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Cart />
      </Grid>
    </Grid>
  );
}

CartLayout.propTypes = {
  children: CHILDREN_PROP_TYPES,
};
