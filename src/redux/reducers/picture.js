import { CREATE_PICTURE,
         GET_IMAGE_EDIT ,
         COLOR_TO_GRAY
} from '../constants/types'

const initialState = {
    images:[],
    imageEdit:{},
    imgres:{} //image result
}

export default (state = initialState, action) => {

    switch (action.type) {
        case CREATE_PICTURE:{
            state.images.push(action.payload)
            return{
                ...state
            }
        }
        case GET_IMAGE_EDIT:{
            const { id }= action.payload
            const image = state.images.find(t=>t.id === id)

            if(image)
            {
                return{
                    ...state,
                    imageEdit:image
                }
            }
            else
                return{
                    ...state,
                    imageEdit:{}
                }
        }
        case COLOR_TO_GRAY:{
                return {
                    ...state,
                    imgres:action.payload
                }
        }
        default:
            return state
    }

}
