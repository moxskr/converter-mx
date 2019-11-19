import {
    ADD_TO_FAVORITE_CURR_LIST,
    FETCH_CURR_LIST_ERROR,
    FETCH_CURR_LIST_REQUEST,
    FETCH_CURR_LIST_SUCCESS, REMOVE_FROM_FAVORITE_CURR_LIST
} from "../actionTypes";
import {addLocalStatusKey, objToList} from "../utils/helper";

const initState = {
    currList : [],
    isLoading : false,
    error : [],
};

export const currReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case FETCH_CURR_LIST_REQUEST :
            return {
                ...state,
                isLoading: payload.isLoading
            };
        case FETCH_CURR_LIST_SUCCESS : {
            return {
                ...state,
                isLoading: payload.isLoading,
                currList: payload.currList
            }
        }
        case FETCH_CURR_LIST_ERROR : {
            return {
                ...state,
                isLoading: payload.isLoading,
                error: payload.error
            }
        }
        case ADD_TO_FAVORITE_CURR_LIST :
            return {
                ...state,
                currList: state.currList.map(item => item.id === payload ? ({...item, favor : true}) : item)
            };
        case REMOVE_FROM_FAVORITE_CURR_LIST :
            return {
                ...state,
                currList: state.currList.map(item => item.id === payload ? ({...item, favor : false}) : item)
            };
        default : return state;
    }
};