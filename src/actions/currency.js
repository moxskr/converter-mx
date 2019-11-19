import {
    ADD_TO_FAVORITE_CURR_LIST,
    FETCH_CURR_LIST_ERROR,
    FETCH_CURR_LIST_REQUEST,
    FETCH_CURR_LIST_SUCCESS, REMOVE_FROM_FAVORITE_CURR_LIST
} from "../actionTypes";
import axios from 'axios';
import {
    addLocalStatusKey,
    addStatusKey,
    addToLocalFavoriteList,
    getLocalFavoriteList,
    objToList, removeFromLocalFavoriteList
} from "../utils/helper";

export const fetchCurrList = () => async dispatch => {
    dispatch({
        type : FETCH_CURR_LIST_REQUEST,
        payload : {
            isLoading : true
        }
    });
    try {
        const res = await axios.get('https://free.currconv.com/api/v7/currencies?apiKey=e47734ef9fefb1f53b23');
        dispatch({
            type: FETCH_CURR_LIST_SUCCESS,
            payload: {
                currList: addLocalStatusKey(addStatusKey(objToList(res.data.results))),
                isLoading: false
            }
        });
    }catch(error) {
        dispatch({
           type : FETCH_CURR_LIST_ERROR,
           payload : {
               isLoading : false,
               error
           }
        })
    }
};

export const addFavoriteCurr = id => {
    addToLocalFavoriteList(id);
    return {
        type : ADD_TO_FAVORITE_CURR_LIST,
        payload : id
    }
};

export const removeFavoriteCurr = id => {
    removeFromLocalFavoriteList(id);
    return {
        type : REMOVE_FROM_FAVORITE_CURR_LIST,
        payload : id
    }
};