import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/RemoveCircle';

import { makeStyles } from '@material-ui/core/styles';

import { useCart } from '../cart.context';
import { removeFromCart } from '../cart.actions';
import { ROUTES_PATHS_BY_NAMES } from '../../routing/routing.constants';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: '20px',
  },
  cardContent: {
    flexGrow: 1,
  },
  listItem: {
    borderBottom: '1px solid lightgray',
    textDecoration: 'none',
    color: 'black',
  },
});

export function Cart() {
  const classes = useStyles();
  const [{ articles, total }, dispatch] = useCart();

  const removeItemFromList = useCallback(
    id => () => dispatch(removeFromCart(id)),
    [dispatch],
  );

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Cart
        </Typography>
        <List aria-label="purchased-items-list">
          {Object.values(articles).map(article => (
            <ListItem
              component={Link}
              to={`/articles/${article.slug}`}
              key={article.id}
              className={classes.listItem}
            >
              <ListItemText
                primary={`x${article.occurrences || 1} - ${article.name}`}
              />
              <ListItemText
                secondary={(article.occurrences || 1) * article.price}
              />
              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  onClick={removeItemFromList(article.id)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Typography align="right" gutterBottom variant="h6" component="h4">
          Total Price: {total} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          to={ROUTES_PATHS_BY_NAMES.checkout}
          component={Link}
          size="small"
          color="secondary"
          variant="outlined"
        >
          Check out
        </Button>
      </CardActions>
    </Card>
  );
}
