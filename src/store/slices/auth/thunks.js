import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

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

        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout({ errorMessage: null }));
    }
}