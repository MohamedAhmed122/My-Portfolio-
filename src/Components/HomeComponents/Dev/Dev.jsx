import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ProgressBar from "../../Custom-ProgessBar/ProgessBar";
import useStyles from "./Style";
import Me from "../../../assets/me.png";

const Dev = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="space-around"
      style={{ marginTop: "10rem",marginBottom: "10rem" }}
    >
      <Grid item>
        <img className={classes.img} src={Me} alt="Mohamed Youssef" />
        <Typography className={classes.main} align="center" variant="h2">
          Who Am I ?
        </Typography>
        <Typography className={classes.text} align="center" variant="subtitle1">
          I'm a Front-End Developer, and My Favorite Framework is React
          <span></span>💕. Currently, I Live in Tomsk, Russia, But I am From
          Egypt. 
          <br />I have serious passion for UI effects, animations and creating
          intuitive, dynamic user experiences.
        </Typography>
      </Grid>
      <Grid item>
        <div className={classes.progress}>
          <label>HTML</label>
          <ProgressBar done="90" />
        </div>
        <div className={classes.progress}>
          <label>CSS</label>
          <ProgressBar done="90" />
        </div>
        <div className={classes.progress}>
          <label>React</label>
          <ProgressBar done="80" />
        </div>
        <div className={classes.progress}>
          <label>JavaScript</label>
          <ProgressBar done="70" />
        </div>
        <div className={classes.progress}>
          <label>Firebase</label>
          <ProgressBar done="60" />
        </div>
        <div className={classes.progress}>
          <label>UI Design</label>
          <ProgressBar done="40" />
        </div>
        <div className={classes.progress}>
          <label>Figma</label>
          <ProgressBar done="60" />
        </div>
      </Grid>
    </Grid>
  );
};
export default Dev;
