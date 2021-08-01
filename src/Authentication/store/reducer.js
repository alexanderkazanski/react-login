import {
    AUTHENTICATION_CREDENTIALS_UPDATE,
    AUTHENTICATION_CREDENTIALS_UPDATE_SUCCESS,
    AUTHENTICATION_CREDENTIALS_UPDATE_FAILURE
} from "./actions";

const initialState = {
    username: '',
    password: ''
}

export const authenticationReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATION_CREDENTIALS_UPDATE:
            return {
                ...state,
                ...payload
            }
        case AUTHENTICATION_CREDENTIALS_UPDATE_SUCCESS:
            return {
                ...state,
                error: false
            }
        case AUTHENTICATION_CREDENTIALS_UPDATE_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}