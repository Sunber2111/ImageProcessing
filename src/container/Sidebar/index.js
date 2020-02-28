import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import {Link} from 'react-router-dom'
import setting from './setting.png'
import pencil from './pencil.png'
import light from './light.png'
import image from './image.png'

const useStyles = makeStyles({
    root: {
        width:'3%',
        height:'100vh',
        background:'white',
        boxShadow:'1px 1px rgba(0,0,0,0.3)'
    },
})

const HomeIcon = (props) =>{
    return (
      <SvgIcon {...props} style={{width:'30px',height:'30px',marginTop:'14px'}} >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export const Sidebar = () => {

    const classes = useStyles()

    return (
        <Grid 
            className={classes.root} 
            alignItems="center"
            container justify="flex-start" 
            direction="column" >
            <Link to='/'>
              <HomeIcon color="disabled" />
            </Link>
            <img src={setting} className='icon-sidebar-header' />
            <img src={light} className='icon-sidebar' />
            <img src={image} className='icon-sidebar' />
            <img src={pencil} className='icon-sidebar' />
        </Grid>
    )
}
