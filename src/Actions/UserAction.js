import userApi from "../Api/userAPI";
import {
    CHECK_OTP_FAIL,
    CHECK_OTP_REQUEST,
    CHECK_OTP_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT
} from "../Constants/UserConstants";

export const checkOtp = (emailAddress) => async (dispatch) => {
    dispatch({ type: CHECK_OTP_REQUEST, payload: emailAddress });
    try {
        const code = await userApi.checkOtp(emailAddress);
        dispatch({ type: CHECK_OTP_SUCCESS, payload: code });
    } catch (error) {
        dispatch({
            type: CHECK_OTP_FAIL, payload: error.message
        });
    }
};

export const register = (username, emailAddress, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { username, emailAddress, password } });
    try {
        const data = await userApi.register({ username, emailAddress, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL, payload: error.message
        });
    }
};

export const signin = (username, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
    try {
        const data = await userApi.signIn({ username, password });
        const { jwttoken } = data;
        localStorage.setItem('access_token', jwttoken);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            paload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    dispatch({ type: USER_SIGNOUT });
    document.location.href = '/signin';
};