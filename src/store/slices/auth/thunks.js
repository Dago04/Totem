import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        // Here you can make a request to your server to check if the user is authenticated
        dispatch(checkingCredentials());
    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {
        // Here you can make a request to your server to check if the user is authenticated
        dispatch(checkingCredentials());
    }
}