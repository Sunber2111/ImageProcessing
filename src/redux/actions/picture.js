import { CREATE_PICTURE,GET_IMAGE_EDIT,COLOR_TO_GRAY } from '../constants/types'
import jimp from 'jimp'
import { color2Gray,convertToBase64 } from 'opencv'
import { v4 } from 'uuid'
const { createCanvas, loadImage } = require('canvas')

export const createPicture = url => async dispatch => {
    try {
        
        const id = v4()

        dispatch({
            type: CREATE_PICTURE,
            payload: {url,id}
        })

    } catch (error) {
        console.log(error);

    }
}

export const getImageEdit = (img) => async dispatch=>{
    try {
        const data = await convertToBase64(img.url)

        dispatch({
            type:GET_IMAGE_EDIT,
            payload:img
        })

        dispatch({
            type:COLOR_TO_GRAY,
            payload:data
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const colorToGray =  url => async dispatch=>{
    try {
        const img = await color2Gray(url)

        dispatch({
            type:COLOR_TO_GRAY,
            payload:img
        })

    } catch (error) {
        
    }
}