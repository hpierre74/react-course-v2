import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import { useCart } from '../../cart/cart.context';
import { PAYMENT, SHIPPING } from '../checkout.constants';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));
const defaultObject = {};

export const getShippingState = state => {
  if (!state[SHIPPING]) return defaultObject;
  return state[SHIPPING];
};

export const getPaymentState = state => {
  if (!state[PAYMENT]) return defaultObject;
  return state[PAYMENT];
};

export default function Review({ formState }) {
  const classes = useStyles();
  const [{ articles, total }] = useCart();
  const { firstName, lastName, address1, address2, city, state, zip, country } =
    getShippingState(formState);
  const { cardName, cardNumber, expDate } = getPaymentState(formState);

  console.log(articles, formState);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.values(articles).map(article => (
          <ListItem className={classes.listItem} key={article.name}>
            <ListItemText
              primary={article.name}
              secondary={`x ${articles.occurrences || 1}`}
            />
            <Typography variant="body2">
              $
              {article.occurrences
                ? article.occurrences * article.price
                : article.price}
            </Typography>
          </ListItem>
        ))}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {SHIPPING}
          </Typography>
          <Typography gutterBottom>
            {firstName} {lastName}
          </Typography>
          <Typography gutterBottom>
            {[address1, address2, city, state, zip, country].join(', ')}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {PAYMENT}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expires</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{expDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  formState: PropTypes.shape({}).isRequired,
};
