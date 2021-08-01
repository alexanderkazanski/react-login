import { 
    authenticationCredentialsUpdate, 
    authenticationCredentialsUpdateFailure, 
    authenticationCredentialsUpdateSuccess 
} from "./store/actions"

export const credentialsUpdate = (username, password) => (dispatch) => {
    try {
        dispatch(authenticationCredentialsUpdate(username, password))
        dispatch(authenticationCredentialsUpdateSuccess())
    } catch(err) {
        dispatch(authenticationCredentialsUpdateFailure())
    }
    // TODO: impliment history and react router
}