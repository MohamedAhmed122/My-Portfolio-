import React, { Fragment } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import useStyles from "./Style";

const ContactForm = () => {
  const classes = useStyles();
  return (
    <Fragment>
        <Grid
            container
            item
            alignItems="center"
            justify="center"
            style={{ marginTop: "4rem" }}
        >
            <div className={classes.before}></div>
            <Typography variant="h2" className={classes.main}>
            Contact me
            </Typography>
            <div className={classes.after}></div>
        </Grid>
        <Grid
            container
            alignItems="center"
            justify="space-around"
            style={{ marginBottom: "10rem" }}
        >
            <form className={classes.root} noValidate autoComplete="off">
            <Grid item style={{ display: "block" }}>
                <TextField
                className={classes.input}
                id="standard-basic"
                label="Email"
                />
                <TextField
                id="standard-basic"
                className={classes.input}
                label="Name"
                />
            </Grid>
            <Grid item>
                <TextField
                id="standard-basic"
                className={classes.input}
                label="Phone Number"
                />
                <TextField
                id="standard-basic"
                className={classes.input}
                label="Subject"
                />
            </Grid>
            <div className={classes.div}>
                <TextField
                className={classes.bigInput}
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={4}
                />
            </div>
            <div className={classes.div}>
                <Button className={classes.btn} variant="outlined">Send Message <SendOutlinedIcon style={{marginLeft: '0.3rem'}} /></Button>
            </div>           
            </form>
        </Grid>
    </Fragment>
  );
};
export default ContactForm;
