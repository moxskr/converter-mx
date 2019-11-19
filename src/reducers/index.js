import {combineReducers} from "redux";
import {currReducer} from "./CurrReducer";
import {converterReducer} from "./ConvertReducer";

export default combineReducers({
    curr : currReducer,
    conv : converterReducer
})