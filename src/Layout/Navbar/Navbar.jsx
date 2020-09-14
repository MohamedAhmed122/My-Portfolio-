import React, { useState, Fragment} from "react";
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

  const handleScrollWork =()=>{
    window.scrollTo({top:2120,behavior: 'smooth'})
  }
  const handleScrollAbout =()=>{
    window.scrollTo({top:850,behavior: 'smooth'})
  }
  const handleScrollContact =()=>{
    window.scrollTo({top:3420,behavior: 'smooth'})
  }
  
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
              <Tab className={classes.tab} onClick={()=>handleScrollAbout()} label="About" />
              <Tab className={classes.tab} onClick={()=>handleScrollWork()} label="Work" />
              <Tab className={classes.tab} onClick={()=>handleScrollContact()} label="Contact" />
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


