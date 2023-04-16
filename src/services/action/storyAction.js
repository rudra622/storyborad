import Api from "../../Apis/Api"
import { CREATE_STORY,DELETE_STORY,GET_STORY,GET_STORYS,IS_LOADING, UPDATE_STORY} from "../constant/actionType"

export const createStory = (data) => {
    // console.log(data);
    return {
        type : CREATE_STORY,
        payload : data
    }
}
export const createStoryAsync = (data) => {

    return async (dispatch) => {
        
        const result = await Api.post("/storys", data)

        dispatch(getStorysAsync())
        // console.log(result);
    }
}
export const getStorys = (data) => {
    console.log(data);
    return {
        type : GET_STORYS,
        payload : data
    }
}
export const getStorysAsync = () => {

    return async dispatch => {
        
        dispatch(isloading())

        const result = await Api.get("/storys")

        dispatch(getStorys(result.data))
    }
}
export const isloading = () => {
    return {
        type: IS_LOADING
    }
}
export const DeleteStory = () => {
    return {
        type : DELETE_STORY
    }
}
export const DeleteStoryAsync = (id) => {

    return async dispatch => {
        dispatch(isloading())
        const res = await Api.delete(`/Storys/${id}`)
        dispatch(getStorysAsync())
    }
}
export const getStory = (data) => {
    return {
        type : GET_STORY,
        payload : data
    }
}
export const getStoryAsync = (id) => {

    return async dispatch => {
        const res = await Api.get(`/Storys/${id}`)
        dispatch(getStory(res.data))
    }
}
export const UpDateStory = (data) => {
    return {
        type : UPDATE_STORY,
        payload : data
    }
}
export const UpdateStoryAsync = (data) => {

    return async dispatch => {
        const res = await Api.put(`/Storys/${data.id}`, data)
        dispatch(getStorysAsync(res.data))
    }
}