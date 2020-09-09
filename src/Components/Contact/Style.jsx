const { makeStyles } = require("@material-ui/core");


const arcBlue = "#0b8c88";
const arcWhiteBlue = "#00bcd4";

export default  makeStyles ({
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
        width:'30vw',
        color: arcWhiteBlue,
        background: 'white',
        border: `3px solid ${arcWhiteBlue}`,
        fontSize: '1rem',
        padding: '0.4rem 0rem',
        borderRadius: '50px',
        '&:hover':{
            color: 'white',
            background:arcWhiteBlue,
            border: `2px solid #1de9b6`,
        }
    }
});