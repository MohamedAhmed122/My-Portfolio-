import React, { useState} from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { ScrollingProvider, SectionLink, Section } from 'react-scroll-section';
import Projects from "../../Components/HomeComponents/Projects/Projects";
import ContactForm from "../../Components/Contact/Contact";
import Hero from '../../Components/HomeComponents/Hero/Hero'
import HomeIcons from '../../Components/HomeComponents/HomeIcons/HomeIcons'


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
    <ScrollingProvider>

      <AppBar className={nav ? classes.appBarActive : classes.appBar}>
        <Toolbar>
          <Typography className={classes.logo}>LOGO</Typography>
          <Tabs className={classes.tabs}>
          <SectionLink section="Home">
              {({ onClick, isSelected }) => (
                <Tab onClick={onClick} selected={isSelected} className={classes.tab} label="Home" />
              )}
          </SectionLink>
          <SectionLink section="About">
              {({ onClick, isSelected }) => (
                <Tab onClick={onClick} selected={isSelected} className={classes.tab} label="About" />
              )}
          </SectionLink>
          <SectionLink section="Work">
              {({ onClick, isSelected }) => (
                <Tab onClick={onClick} selected={isSelected} className={classes.tab} label="Work" />
              )}
          </SectionLink>
          <SectionLink section="Contact">
              {({ onClick, isSelected }) => (
                <Tab onClick={onClick} selected={isSelected} className={classes.tab} label="Contact" />
              )}
          </SectionLink>
          </Tabs>
        </Toolbar>
      </AppBar>
      <Section id="Home"><Hero /></Section>
      <Section id="About"><HomeIcons /></Section>
      <Section id="Work"><Projects /></Section>
      <Section id="Contact"><ContactForm /></Section>
    </ScrollingProvider>
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


