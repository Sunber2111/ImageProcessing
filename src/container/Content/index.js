import React from 'react'
import Grid from '@material-ui/core/Grid'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { getImageEdit } from '../../redux/actions/picture'

const Content = (props) => {

    const {images} = useSelector(state=>state.picture)
    
    const dispatch = useDispatch()

    const onclick = val =>{
        console.log(val);
        
        dispatch(getImageEdit(val))
    }

    const createImages = images.map((val)=>(
        <Link to={`/edit/${val.id}`} onClick={()=>onclick(val)} >
            <img src={val.url} className='img-content' id={val.id} />
        </Link>
    ))

    return (
        <Grid item xs={10} 
            className='content-con'>
            <Grid
                className='content'
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch">
                {createImages}
            </Grid>
        </Grid>
    )
}

export default Content
