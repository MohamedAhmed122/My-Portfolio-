
import { makeStyles } from "@material-ui/core";


const arcBlue = "#0b8c88";
const arcWhiteBlue = "#00bcd4";

export default makeStyles((theme) => ({
    grid:{
        height: '100vh',
        width: '60vw',
        [theme.breakpoints.down("sm")]: {
            width: '45vw',
          },
          [theme.breakpoints.down("xs")]: {
            width: '75vw',
            height: '60vh',
          },
    },
    text:{
        fontSize: '2.2rem',
        color: arcWhiteBlue,
        [theme.breakpoints.down("md")]: {
            marginTop: "5rem",
            fontSize: '1.6rem',
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "5rem",
            fontSize: '1.4rem',
          },
          [theme.breakpoints.down("xs")]: {
            marginTop: "10rem",
            fontSize: '2rem',
          },
    },
    text2:{
        fontSize: '2.2rem',
        marginTop: '1.3rem',
        textAlign: 'center',
        color: arcWhiteBlue,
        [theme.breakpoints.down("md")]: {
          
            fontSize: '1.6rem',
          },
    }


}));