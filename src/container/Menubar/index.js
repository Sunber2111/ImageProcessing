import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core//Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { useDispatch, useSelector } from 'react-redux'
import { createPicture } from '../../redux/actions/picture'

const Menubar = () => {

    const dispatch = useDispatch()

    const onChange = e => {
        dispatch(createPicture(URL.createObjectURL(e.target.files[0])))
    }

    return (
        <Grid
            item
            xs={2}>
            <Grid
                className='menubar'>
                <Box pt={1} className='menu-header'> PicSun </Box>
                <Box mt={3} mb={5} className='menu-title'> Chọn hình cần chỉnh sửa </Box>
                <Box my={4} className='br-menu' ></Box>
                <label class="custom-file-upload">
                    <input type="file" onChange={onChange} />
                    Upload
                </label>
            </Grid>

        </Grid>
    )
}

export default Menubar
