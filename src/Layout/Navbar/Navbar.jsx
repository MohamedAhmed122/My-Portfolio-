import React, { Fragment ,useState} from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const classes = useStyles();

  const handleNav=()=>{
    if (window.scrollY >= 40){
      setNav(true)
    }else{
      setNav(false)
    }
  }
  window.addEventListener('scroll',handleNav)

  return (
    <Fragment>
      <AppBar className={nav ? classes.appBarActive : classes.appBar}>
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
    background: 'transparent',
  },
  appBarActive:{
    background: '#0097a7',
  },
  tabs: {
    marginLeft: "auto",
    marginRight: '2rem',
    [theme.breakpoints.down("md")]: {
          
      marginRight: '1rem',
    },
  },
  tab: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    "&:hover": {
      borderBottom: "3px solid white",
    },
  },
}));


// background: linear-gradient(90deg, rgba(111,156,181,1) 0%, rgba(0,78,121,1) 50%, rgba(53,163,224,1) 100%);
// background: linear-gradient(90deg, rgba(166,215,242,1) 0%, rgba(59,142,189,1) 50%, rgba(135,192,224,1) 100%);
// background: linear-gradient(90deg, rgba(7,75,112,1) 0%, rgba(30,161,235,1) 50%, rgba(61,145,193,1) 100%);