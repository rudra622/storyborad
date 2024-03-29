import { CREATE_STORY, DELETE_STORY, GET_STORY, GET_STORYS, IS_LOADING, UPDATE_STORY } from '../constant/actionType';

const initialState = {
    storys: [],
    story: {},
    isLoading: false,
    isEdit: false
}
const StoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_STORY:
            return state
            break;
        case GET_STORYS:
            return {
                ...state,
                storys: action.payload,
                isLoading: false,
                isEdit: false,
                story: {}
            }
            break;
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
            break;
        case DELETE_STORY:
            return {
                ...state,
                isLoading: false
            }
            break;
        case GET_STORY:
            return {
                ...state,
                story: action.payload,
                isEdit: true
            }
            break;
        case UPDATE_STORY:
            return {
                ...state,
                isEdit: false
            }
            break;
        default:
            return state
    }
}
export default StoryReducer;