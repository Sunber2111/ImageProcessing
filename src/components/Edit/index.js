import React,{useEffect} from 'react'
import { Tool } from '../../container/Tool'
import { Picture } from '../../container/Picture'
import { Sidebar } from '../../container/Sidebar'
import Grid from '@material-ui/core/Grid'

export const Edit = (props) => {
   
    return (

        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            <Sidebar />
            <Tool />
            <Picture  />
        </Grid>
    )
}
