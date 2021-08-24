import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/RemoveCircle';

import { makeStyles } from '@material-ui/core/styles';

import { useSomeContext } from '../SomeContext.context';
import { doStuff } from '../SomeContext.actions';

const useStyles = makeStyles({
  listItem: {
    borderBottom: '1px solid lightgray',
    textDecoration: 'none',
    color: 'black',
  },
});

export function MaterialUiList() {
  const classes = useStyles();
  const [{ items }, dispatch] = useSomeContext();

  const dispatchDoStuff = useCallback(
    id => () => dispatch(doStuff(id)),
    [dispatch],
  );

  return (
    <List aria-label="items-list">
      {Object.values(items).map(item => (
        <ListItem
          component={Link}
          to={`/items/${item.foo}`}
          key={item.id}
          className={classes.listItem}
        >
          <ListItemText primary="Hey i'm some text" />
          <ListItemSecondaryAction>
            <IconButton
              size="small"
              onClick={dispatchDoStuff(item.id)}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
