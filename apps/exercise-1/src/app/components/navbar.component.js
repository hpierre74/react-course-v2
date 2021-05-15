import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { PowerSettingsNewOutlined } from '@material-ui/icons';

import { isUserConnected } from '../modules/user/user.selectors';
import { useUser } from '../modules/user/user.context';
import { login, logout } from '../modules/user/user.actions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    transition: 'all 0.5s',
    marginRight: theme.spacing(2),
  },
  loginButton: {
    color: theme.palette.success.main,
    '&:hover': {
      background: theme.palette.error.main,
      color: 'white',
    },
  },
  logoutButton: {
    color: theme.palette.error.main,
    '&:hover': {
      background: theme.palette.success.main,
      color: 'white',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [userState, dispatch] = useUser();
  const isConnected = isUserConnected(userState);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logInAndOut = () => {
    dispatch(isConnected ? logout() : login());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Shopping App
        </Typography>
        <IconButton
          edge="start"
          className={classnames([
            classes.menuButton,
            isConnected ? classes.loginButton : classes.logoutButton,
          ])}
          aria-label={`${isConnected ? 'login' : 'logout'} button`}
          onClick={logInAndOut}
        >
          <PowerSettingsNewOutlined />
        </IconButton>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleClose}>
              Contact
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              About
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
