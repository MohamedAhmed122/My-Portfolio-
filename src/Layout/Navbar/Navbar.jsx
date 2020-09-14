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

  const handleScroll =(value)=>{
    window.scrollTo({top:value,behavior: 'smooth'})
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
          <div className={classes.logoContainer}>
          <Typography className={classes.logo}>MY</Typography>
          </div>
          <Tabs className={classes.tabs}>
              <Tab className={classes.tab} onClick={()=>handleScroll(0)}  label="Home" />
              <Tab className={classes.tab} onClick={()=>handleScroll(850)} label="About" />
              <Tab className={classes.tab} onClick={()=>handleScroll(2120)} label="Work" />
              <Tab className={classes.tab} onClick={()=>handleScroll(3440)} label="Contact" />
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
  logoContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem 4rem',
    backgroundColor: 'white',
    height: '5rem',
    width: '5rem',
    borderRadius: '50%',
    border: '2px solid #0097a7'
  },
  logo:{
    color:'#0097a7',
    textAlign: 'center',
    fontFamily: 'Fugaz One, cursive',
    fontSize: '2.5rem'
  }

}));


