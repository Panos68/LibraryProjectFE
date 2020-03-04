import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Link
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    marginLeft: theme.spacing(1),
  }
}));

function NavigationHeader() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Library</Typography>
        <Link underline="none" className={classes.link} color="inherit" component={RouterLink} to="/">
          Main
        </Link>
        <Link underline="none" className={classes.link} color="inherit" component={RouterLink} to="/books">
          Books
        </Link>
      </Toolbar>
    </AppBar>

  );
}

export default NavigationHeader;
