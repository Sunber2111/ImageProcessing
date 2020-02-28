import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { colorToGray } from '../../redux/actions/picture'

const useStyles = makeStyles({
    root: {
        width: '18%',
        background: 'white',
        boxShadow: '2px 0 rgba(0,0,0,0.2)',
        marginLeft: '1.5px',
        height: '100vh'
    },
    tille: {
        textAlign: 'center',
        fontSize: '16px',
        marginTop: '20px',
        fontWeight: 'bold',
        color: '#BDBDBD'
    },
    br: {
        width: '80%',
        height: '1px',
        background: '#BDBDBD',
        marginTop: '20px'
    },
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 38,
        padding: '0 20px',
        marginTop: '20px',
        minWidth:'130px'
    }
})

const useStylesBtn = makeStyles({
    root: {
        background: props =>
            props.color === 'red'
                ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: props =>
            props.color === 'red'
                ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
                : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 38,
        padding: '0 20px',
        marginTop: '20px',
        minWidth:'130px'
    },
})

const MyButton = (props) => {
    const { color, ...other } = props;
    const classes = useStylesBtn(props);

    return <Button className={classes.root} {...other}  />;
}

export const Tool = () => {

    const classes = useStyles()

    const { url } = useSelector(state => state.picture.imageEdit)

    const dispatch = useDispatch()

    const onclick = action =>{

        dispatch(action(url))

    }

    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.root}
        >
            <Grid className={classes.tille}>Filter Edit</Grid>
            <Grid className={classes.br}></Grid>
            <Button className={[classes.btn, classes.br]} onClick={()=>onclick(colorToGray)} >Color To Gray</Button>
            <Button className={classes.btn}>Color To Gray</Button>
            <Button className={classes.btn}>Color To Gray</Button>
            <Button className={classes.btn}>Color To Gray</Button>
            <MyButton color="red">Color To Gray</MyButton>
            <MyButton color="blue" >Color To Gray</MyButton>
        </Grid>
    )
}
