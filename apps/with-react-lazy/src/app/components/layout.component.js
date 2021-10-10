import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

import NavBar from './navbar.component';

import { CHILDREN_PROP_TYPES } from '../constants/proptypes.constants';

const useStyles = makeStyles({
  container: {
    marginTop: '2em',
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Container className={classes.container}>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: CHILDREN_PROP_TYPES,
};
