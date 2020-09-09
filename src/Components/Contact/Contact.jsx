import React, { Fragment } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import useStyles from "./Style";

const ContactForm = () => {
  const classes = useStyles();
  return (
    <Fragment>
        <Grid
            container
            alignItems="center"
            justify="space-around"
            style={{ marginTop: "10rem", marginBottom: "10rem" }}
        >
            <form noValidate autoComplete="off">
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
                label="Message"
                />
            </Grid>
            <div className={classes.div}>
                <Button className={classes.btn} variant="outlined">Send Message <SendOutlinedIcon style={{marginLeft: '0.3rem'}} /></Button>
            </div>           
            </form>
        </Grid>
    </Fragment>
  );
};
export default ContactForm;
