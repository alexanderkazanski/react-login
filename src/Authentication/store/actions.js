export const AUTHENTICATION_CREDENTIALS_UPDATE = "AUTHENTICATION_CREDENTIALS/UPDATE"
export const AUTHENTICATION_CREDENTIALS_UPDATE_SUCCESS = "AUTHENTICATION_CREDENTIALS/SUCCESS"
export const AUTHENTICATION_CREDENTIALS_UPDATE_FAILURE = "AUTHENTICATION_CREDENTIALS/FAILURE"

export const authenticationCredentialsUpdate = (username, password) => ({
    type: AUTHENTICATION_CREDENTIALS_UPDATE,
    payload: {
        username, password
    }
})

export const authenticationCredentialsUpdateSuccess = () => ({
    type: AUTHENTICATION_CREDENTIALS_UPDATE_SUCCESS,
    payload: {
        error: false
    }
})

export const authenticationCredentialsUpdateFailure = () => ({
    type: AUTHENTICATION_CREDENTIALS_UPDATE_FAILURE,
    payload: {
        error: true
    }
})