import React from 'react'
import Content from '../../container/Content'
import Menubar from '../../container/Menubar'
import Grid from '@material-ui/core/Grid'

const Home = (props) => {

    return (
        <Grid container className='Home'>
            <Menubar/>
            <Content/>
        </Grid>
    )
}

export default Home
