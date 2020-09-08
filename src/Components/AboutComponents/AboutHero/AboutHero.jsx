import React, { Fragment } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import comp from '../../../assets/comp3.svg'

import useStyles from './Styles'

const AboutHero =()=>{
    const classes = useStyles()
    return(
        <Fragment>
            <Grid container direction='row' justify='space-between' alignItems='center'>
                <Grid item>
                    <Container>
                        <Typography className={classes.text}  variant='h3'>Are you excited to see my work?</Typography>
                        <Typography className={classes.text2}  variant='h3'> Me too <SentimentSatisfiedOutlinedIcon fontSize='large' /></Typography>
                    </Container>
                </Grid>
                <Grid item>
                    <img className={classes.grid} src={comp} alt='hero' />
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default  AboutHero;