import { makeStyles } from "@material-ui/core";


const arcWhiteBlue = "#00bcd4";

export default  makeStyles((theme) => ({
    img:{
        height: 300,
        width: 300,
        borderRadius: '50%',
        marginLeft: 70,
        [theme.breakpoints.down("md")]: {
          
            marginLeft: 120,
          },
          [theme.breakpoints.down("xs")]: {
          
            marginLeft: 50,
          },
    },
    main:{
        fontSize: '2rem',
        fontFamily: 'Fugaz One, cursive',
        color: arcWhiteBlue,
        marginBottom: '0.5rem'
    },
    text:{
        fontSize: '1rem',
        width: '33vw',
        fontFamily: "Lato, sans-serif",
        fontWeight: 400,
        lineHeight: '1.8rem',
        color: '#868686',
        [theme.breakpoints.down("md")]: {
          
            width: '40vw',
            marginBottom: 50,
          },
        [theme.breakpoints.down("sm")]: {
          
            width: '76vw',
          },
    },

}));