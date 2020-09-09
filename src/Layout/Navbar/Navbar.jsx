import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.logo}>LOGO</Typography>
          <Tabs className={classes.tabs}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Work" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;

const useStyles =  makeStyles((theme) => ({
  appBar: {
    background: "#0097a7",
  },
  tabs: {
    marginLeft: "auto",
    marginRight: '5rem',
    [theme.breakpoints.down("md")]: {
          
      marginRight: '1rem',
    },
  },
  tab: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    "&:hover": {
      borderBottom: "3px solid #1de9b6",
    },
  },
}));
