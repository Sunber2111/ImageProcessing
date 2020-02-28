import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'
import isEmp from '../../validation'
import ima from './nam.jpg'

const useStyles = makeStyles({
    root: {
        width: '78%'
    },
    img: {
        width: '80%'
    },
    imgContent: {
        width: '60%'
    }
})

export const Picture = (props) => {

    const { imgres } = useSelector(state => state.picture)

    const classes = useStyles()

    const create = () =>{
        if(imgres)
        {   
            return (<img src={imgres}  className={classes.imgContent} />)
        }
    }

    return (
        <Grid
            className={classes.root}    
            container
            direction="row"
            justify="center"
            alignItems="center">
            {create()}
        </Grid>
    )
}
