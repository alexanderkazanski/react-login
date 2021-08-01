import { combineReducers } from "redux";
import { authenticationReducer } from "./Authentication";


export const globalReducer = combineReducers({
    authentication: authenticationReducer
})