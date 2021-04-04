import {
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT
} from "../Constants/UserConstants"
import Data from "../Data";


export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const data = Data.users;
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            paload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

export const signout = () => (dispatch) => {
    dispatch({ type: USER_SIGNOUT });
}