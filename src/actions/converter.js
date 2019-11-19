import axios from 'axios';
import {CONVERT_CURRENCY_ERROR, CONVERT_CURRENCY_REQUEST, CONVERT_CURRENCY_SUCCESS} from "../actionTypes";

export const convertCurrency = (basic, result) => async dispatch => {
    dispatch({
        type : CONVERT_CURRENCY_REQUEST,
        payload : {
            isLoading : true
        }
    });
    try{
        const path = basic + "_" + result;
        const reversePath = result + "_" + basic;
        const res = await axios.get(`https://free.currconv.com/api/v7/convert?q=${path},${reversePath}&compact=ultra&apiKey=e47734ef9fefb1f53b23`)
        dispatch({
            type : CONVERT_CURRENCY_SUCCESS,
            payload : {
                isLoading : false,
                result : res.data[path]
            }
        })
    }catch(error) {
        dispatch({
            type : CONVERT_CURRENCY_ERROR,
            payload : {
                isLoading : false,
                error
            }
        })
    }
};