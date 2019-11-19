import {CONVERT_CURRENCY_ERROR, CONVERT_CURRENCY_REQUEST, CONVERT_CURRENCY_SUCCESS} from "../actionTypes";

const initState = {
    isLoading : false,
    result : null,
    error : null
};

export const converterReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case CONVERT_CURRENCY_REQUEST :
            return {
                ...state,
                isLoading: payload.isLoading
            };
        case CONVERT_CURRENCY_SUCCESS :
            return {
                ...state,
                isLoading: payload.isLoading,
                result: payload.result
            };
        case CONVERT_CURRENCY_ERROR :
            return {
                ...state,
                isLoading: payload.isLoading,
                error : payload.error
            };
        default : return state;
    }
};