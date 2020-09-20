import React, { useState, Fragment} from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  Hidden,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";



const Navbar = () => {

const [value, setValueTab] = useState(0);

const handleChange = (event, newValue) => {
    setValueTab(newValue);
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  const [nav,setNav] = useState(false)
  const classes = useStyles();

  const handleScroll =(values)=>{
    window.scrollTo({top:values,behavior: 'smooth'})
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
          <Hidden smDown>
            <div className={classes.logoContainer}>
                <Typography className={classes.logo}>MY</Typography>
            </div>

          </Hidden>
          <Tabs className={classes.tabs} valueTab={value} onChange={handleChange}>
              <Tab  className={classes.tab} onClick={()=>handleScroll(0)}   label="Home" value={0} {...a11yProps(0) }/>
              <Tab className={classes.tab} onClick={()=>handleScroll(750)}  label="About"value={1}  {...a11yProps(1) }/>
              <Tab className={classes.tab} onClick={()=>handleScroll(2120)}  label="Work" value={2} {...a11yProps(2) }/>
              <Tab className={classes.tab} onClick={()=>handleScroll(3440)}  label="Contact" value={3}{...a11yProps(3) } />
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
    [theme.breakpoints.down("sm")]: {
          
      marginLeft: '0rem',
    },
  },
  tab: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    "&:hover": {
      borderBottom: "3px solid white",
    },
    [theme.breakpoints.down("sm")]: {
          
      fontSize: "1rem",
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


