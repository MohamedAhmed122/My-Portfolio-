const { makeStyles } = require("@material-ui/core");



export default makeStyles((theme) => ({
    input:{
        width:'30vw',
        margin: '2rem 5rem',
       
    },
    div:{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: '2rem'
        
    },
    btn:{
        width:'25vw',
        padding: '0.4rem 0rem',
        marginTop:'3rem',
        background: '#0097a7',
        color: 'white',
        border:' 2px solid white',
        
        height: '4rem',
        fontSize: '1.2rem',
        transition: 'all 0.8s ease-in',
        borderRadius: '15px',
        '&:hover':{
            backgroundColor: 'white',
            border: '2px solid #0097a7',
            color: '#0097a7',
            borderRadius: '105px'
        }
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
    bigInput:{
        width: '60vw'
    },
    root: {
        border: 'none',
        overflow: 'hidden',
        '&$focused': {
            borderColor: '#00bcd4',
        },
    },
    
}));
