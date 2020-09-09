import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

import SpeedIcon from "@material-ui/icons/Speed";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import CardMembershipIcon from "@material-ui/icons/CardMembership";

import useStyles from "./Style";

const HomeIcons = () => {
  const classes = useStyles();
  return (
    <Fragment>
        <Grid
            container
            item
            alignItems="center"
            justify="center"
            style={{ marginTop: "10rem" }}
        >
            <div className={classes.before}></div>
            <Typography variant="h2" className={classes.main}>
            About
            </Typography>
            <div className={classes.after}></div>
        </Grid>
        <Grid container alignItems="center" justify="space-around">
            <Grid className={classes.grid} item>
            <div className={classes.icons}>
                <SpeedIcon fontSize="large" className={classes.icon} />
            </div>
            <Typography
                variant="h4"
                style={{ color: "#333", marginBottom: "0.5rem" }}
            >
                Fast
            </Typography>
            <Typography
                align="center"
                variant="subtitle2"
                style={{ color: "#868686" }}
            >
                Fast load times and lag free interaction, my highest priority
            </Typography>
            </Grid>
            <Grid item className={classes.grid}>
            <div className={classes.icons}>
                <ImportantDevicesIcon fontSize="large" className={classes.icon} />
            </div>
            <Typography
                variant="h4"
                style={{ color: "#333", marginBottom: "0.5rem" }}
            >
                Responsive
            </Typography>
            <Typography
                align="center"
                variant="subtitle2"
                style={{ color: "#868686" }}
            >
                My layouts will work on any device, big or small.
            </Typography>
            </Grid>
            <Grid item className={classes.grid}>
            <div className={classes.icons}>
                <WbIncandescentIcon
                style={{ transform: "scaleY(-1)" }}
                fontSize="large"
                className={classes.icon}
                />
            </div>
            <Typography
                variant="h4"
                style={{ color: "#333", marginBottom: "0.5rem" }}
            >
                Intuitive
            </Typography>
            <Typography
                align="center"
                variant="subtitle2"
                style={{ color: "#868686" }}
            >
                Strong preference for easy to use, intuitive UX/UI.
            </Typography>
            </Grid>
            <Grid item className={classes.grid}>
            <div className={classes.icons}>
                <CardMembershipIcon fontSize="large" className={classes.icon} />
            </div>
            <Typography
                variant="h4"
                style={{ color: "#333", marginBottom: "0.5rem" }}
            >
                Dynamic
            </Typography>
            <Typography
                align="center"
                variant="subtitle2"
                style={{ color: "#868686" }}
            >
                Websites don't have to be static, I love making pages come to life.
            </Typography>
            </Grid>
        </Grid>
    </Fragment>
  );
};
export default HomeIcons;
