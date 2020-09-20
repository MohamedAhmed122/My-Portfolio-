const { makeStyles } = require("@material-ui/core");



export default makeStyles((theme) => ({
    input:{
        width:'30vw',
        margin: '2rem 5rem',
        [theme.breakpoints.down("sm")]: {
            width:'60vw',
            margin: '2rem 7rem',
        },
        [theme.breakpoints.down("xs")]: {
            margin: '2rem 3rem',
            width:'70vw',
        },
       
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
        },
        [theme.breakpoints.down("sm")]: {
            width:'40vw',
        },
        [theme.breakpoints.down("xs")]: {
            width:'70vw',
        },
    },
    bigInput:{
        width: '60vw',
        [theme.breakpoints.down("sm")]: {
            width:'70vw',
        },
        [theme.breakpoints.down("xs")]: {
            width:'90vw',
        },
    },
    root: {
        border: 'none',
        overflow: 'hidden',
        '&$focused': {
            borderColor: '#00bcd4',
        },
    },
    
}));
