import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    grid: {
        width: "17vw",
        textAlign: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            width: "40vw",
            height: '50vh'
        },
        [theme.breakpoints.down("xs")]: {
            width: "70vw",
            height: '40vh'
        },
    },
    icons: {
        height: 105,
        width: 105,
        borderRadius: "50%",
        background: "#00bcd4",
        marginLeft: 80,
        margin: "1rem 0",
        [theme.breakpoints.down("md")]: {
            marginLeft: 130,        },
    },
    icon: {
        margin: 25,
        color: "white",
        height: 55,
        width: 55,
        transition: "all 0.3s ",
        "&:hover": {
        height: 65,
        width: 65,
        margin: 5,
        },
    },
    main: {
        fontFamily: "Fugaz One, cursive",
        color: "#333",
        marginBottom: '5rem'
    },
    after: {
        borderBottom: "2px solid #00bcd4",
        width: "10rem",
        display: "block",
        marginLeft: "2rem",
        marginBottom: '5rem',
        [theme.breakpoints.down("xs")]: {
            width: "5rem",
            marginLeft: "1rem",
        },
    },
    before: {
        borderBottom: "2px solid #00bcd4",
        width: "10rem",
        display: "block",
        marginRight: "2rem",
        marginBottom: '5rem',
        [theme.breakpoints.down("xs")]: {
            width: "5rem",
            marginRight: "1rem",
        },
    },
}));
