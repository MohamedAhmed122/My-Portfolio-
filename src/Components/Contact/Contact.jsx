import React, { Fragment, useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import useStyles from "./Style";
import {db} from '../../firebase'
import MainText from '../MainText/MainText'

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {

    db.collection('messages').add({
        name,
        phone,
        email,
        subject,
        message
    })
    setName('');
    setMessage('');
    setPhone('');
    setEmail('');
    setSubject('');

  };
  return (
    <Fragment>
        <MainText>Contact me</MainText>
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
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <TextField
                id="standard-basic"
                type="email"
                className={classes.input}
                value={email}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item>
                <TextField
                id="standard-basic"
                className={classes.input}
                label="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                id="standard-basic"
                className={classes.input}
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                />
            </Grid>
            <div className={classes.div}>
                <TextField
                className={classes.bigInput}
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className={classes.div}>
                <Button onClick={(e)=> handleSubmit(e)} className={classes.btn} variant="outlined">
                Send Message <SendOutlinedIcon style={{ marginLeft: "0.3rem" }} />
                </Button>
            </div>
            </form>
        </Grid>
    </Fragment>
  );
};
export default ContactForm;
